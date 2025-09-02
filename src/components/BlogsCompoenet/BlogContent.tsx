"use client";

import { MoreBlogsData } from "@/data/MoreBlogsData";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { sendFooterMessage } from "@/api/base";
import Link from "next/link";

interface BlogSection {
  sectionTitle?: string;
  description?: string | string[];
  bullets?: string[];
}

interface Blog {
  title: string;
  description?: string | string[];
  bullets?: string[];
  sections?: BlogSection[];
}

interface BlogContentProps {
  blogs: Blog[];
  title: string;
  Banner: StaticImageData;
  mobileBanner: StaticImageData;
  currentBlogType: string;
}

const BlogContent: React.FC<BlogContentProps> = ({
  blogs,
  title,
  Banner,
  mobileBanner,
  currentBlogType,
}) => {
  const currentIndex = MoreBlogsData.blogsMap.findIndex(
    (b) => b.type === currentBlogType
  );

  const prevBlog =
    currentIndex > 0 ? MoreBlogsData.blogsMap[currentIndex - 1] : null;
  const nextBlog =
    currentIndex < MoreBlogsData.blogsMap.length - 1
      ? MoreBlogsData.blogsMap[currentIndex + 1]
      : null;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const [activeSection, setActiveSection] = useState<number | null>(-1);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  const [FooterState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  // Scroll to section
  const scrollToSection = (index: number) => {
    const section = sectionRefs.current[index + 1]; // ✅ matches above
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 100,
        behavior: "smooth",
      });
      setActiveSection(index); // ✅ highlight immediately
    }
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 150;
      let foundActive = -1;

      sectionRefs.current.forEach((sec, index) => {
        if (sec && sec.offsetTop <= scrollPos) {
          foundActive = index - 1; // ✅ shift back (-1 = intro, 0 = first blog)
        }
      });

      setActiveSection(foundActive);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Helpers
  const renderDescriptions = (descriptions: string[] | string | undefined) => {
    if (!descriptions) return null;
    const descArray = Array.isArray(descriptions)
      ? descriptions
      : [descriptions];
    return (
      <div className="mb-4 sm:mb-6">
        {descArray.map((desc: string, descIndex: number) => (
          <p
            key={descIndex}
            className="text-gray-700 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base"
          >
            {desc}
          </p>
        ))}
      </div>
    );
  };

  const renderBullets = (bullets: string[] | undefined) => {
    if (!bullets) return null;
    return (
      <ul className="list-disc ml-4 sm:ml-6 mb-4 sm:mb-6">
        {bullets.map((bullet, index) => (
          <li key={index} className="text-[#02060B] text-[16px]">
            {bullet.includes("**") ? (
              <span
                dangerouslySetInnerHTML={{
                  __html: bullet.replace(
                    /\*\*(.*?)\*\*/g,
                    "<strong>$1</strong>"
                  ),
                }}
              />
            ) : (
              bullet
            )}
          </li>
        ))}
      </ul>
    );
  };

  const renderSection = (section: BlogSection, index: number) => (
    <div key={index} className="mb-6 sm:mb-8">
      {section.sectionTitle && (
        <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">
          {section.sectionTitle}
        </h3>
      )}
      {renderDescriptions(section.description)}
      {renderBullets(section.bullets)}
    </div>
  );

  const renderBlogSection = (blog: Blog, index: number) => (
    <section
      key={index}
      ref={(el) => {
        sectionRefs.current[index + 1] = el; // ✅ shift by 1
      }}
      className="mb-8 sm:mb-12"
    >
      <h2 className="text-[24px] md:text-[26px] lg:text-[30px] font-bold text-transparent bg-gradient-to-l from-[#2058FF] to-[#004BC2] bg-clip-text mb-4 sm:mb-6">
        {blog.title}
      </h2>
      {renderDescriptions(blog.description)}
      {renderBullets(blog.bullets)}
      {blog.sections?.map((section, sectionIndex) =>
        renderSection(section, sectionIndex)
      )}
    </section>
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    const errors: Record<string, string> = {};
    if (!/^[0-9]{10}$/.test(FooterState.phone)) {
      errors.phone = "Phone number must be 10 digits";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(FooterState.email)) {
      errors.email = "Enter a valid email address";
    }
    if (Object.keys(errors).length > 0) {
      setMessage({ type: "error", text: Object.values(errors).join(", ") });
      setIsSubmitting(false);
      return;
    }

    try {
      const { ok, result } = await sendFooterMessage(FooterState);

      if (ok) {
        setMessage({ type: "success", text: "Message sent successfully!" });
        setFormState({ name: "", email: "", phone: "", message: "" });

        setTimeout(() => setMessage(null), 3000);
      } else {
        setMessage({
          type: "error",
          text: result.msg || "Something went wrong, please try again.",
        });
      }
    } catch (error) {
      console.error("Footer form submit error:", error);
      setMessage({
        type: "error",
        text: "Server error, please try again later.",
      });
      setTimeout(() => setMessage(null), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-white">
      <div className="mx-auto px-4 sm:px-6 flex flex-col lg:flex-row gap-8">
        {/* Left Column: Banner + Blog */}
        <div className="flex-1">
          {/* Banner */}
          <div className="relative w-full h-[200px] sm:h-[250px] md:h-[400px] lg:h-[500px] ">
            {/* Desktop Banner */}
            <Image
              src={Banner}
              alt={title}
              fill
              className="object-cover hidden md:block rounded-lg"
              priority
            />

            {/* Mobile Banner */}
            <Image
              src={mobileBanner}
              alt={title}
              fill
              className="object-cover block md:hidden rounded-lg"
              priority
            />
          </div>

          {/* Blog Content */}
          <div className="py-8 sm:py-12 lg:py-16">
            {blogs.map((blog, index) => renderBlogSection(blog, index))}

            <div className=" bg-gray-50 p-6 sm:p-8 rounded-lg">
              <p className="text-gray-600 text-sm sm:text-base mb-2">
                Written By:
              </p>
              <div className="flex items-start space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-600 mt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.121 17.804A9 9 0 1112 21a9 9 0 01-6.879-3.196z"
                  />
                </svg>
                <div>
                  <a
                    href="#"
                    className="text-blue-600 font-medium hover:underline block mb-2"
                  >
                    By HarichTech
                  </a>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    At Harich Technologies, we are dedicated to empowering
                    businesses and individuals through innovative technology
                    solutions. Founded on a passion for excellence and a
                    commitment to delivering value, we specialize in providing
                    cutting edge IT services, software development, and digital
                    transformation strategies.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ✅ Prev / Next inside content column */}
          <div className="w-full flex justify-between items-start mb-10">
            {prevBlog ? (
              <Link
                href={`/blog/${prevBlog.type}`}
                className="flex items-center gap-3 group max-w-[45%] "
              >
                <Image
                  src={prevBlog.Banner}
                  alt={prevBlog.title}
                  width={100}
                  height={100}
                  className="rounded-lg object-cover "
                />
                <div>
                  <p className="text-sm text-gray-500">← Previous article</p>
                  <h4 className="text-sm font-medium text-gray-800 group-hover:text-blue-600 line-clamp-2">
                    {prevBlog.title}
                  </h4>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {nextBlog ? (
              <Link
                href={`/blog/${nextBlog.type}`}
                className="flex items-center gap-3 group text-right max-w-[45%]"
              >
                <div>
                  <p className="text-sm text-gray-500">Next article →</p>
                  <h4 className="text-sm font-medium text-gray-800 group-hover:text-blue-600 line-clamp-2">
                    {nextBlog.title}
                  </h4>
                </div>
                <Image
                  src={nextBlog.Banner.src}
                  alt={nextBlog.title}
                  width={100}
                  height={100}
                  className="rounded-lg object-cover"
                />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="hidden lg:block w-1/5 flex-shrink-0 pb-10">
          <div className="sticky top-4 space-y-8">
            {/* Article Nav */}
            <motion.div
              className="bg-gray-50 rounded-lg p-6 max-h-[70vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-semibold text-lg mb-4 text-gray-900">
                In this article
              </h3>
              <nav className="space-y-2">
                {blogs.map((point, index) => (
                  <motion.button
                    key={index}
                    onClick={() => scrollToSection(index)}
                    className={`block w-full text-left text-sm transition-all duration-300 py-2 pl-4 border-l-2 rounded-r-md ${
                      activeSection === index
                        ? "text-blue-600 bg-blue-50 border-blue-600 font-medium"
                        : "text-gray-600 hover:text-blue-600 border-gray-200 hover:border-blue-600 hover:bg-blue-50"
                    }`}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {point.title}
                  </motion.button>
                ))}
              </nav>
            </motion.div>

            {/* Get in Touch Form */}
            <div className="space-y-6 p-7  border border-gray-300 mb-10 rounded-[20px]">
              <h3 className="text-xl font-bold pb-2 bg-gradient-to-r from-[#2058FF] to-[#004BC2] text-transparent bg-clip-text ">
                Contact Us
              </h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  value={FooterState.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-transparent border border-gray-300 rounded-lg text-black"
                />
                <input
                  type="email"
                  name="email"
                  value={FooterState.email}
                  onChange={handleInputChange}
                  placeholder="Email Id"
                  className="w-full px-4 py-3 bg-transparent border border-gray-300 rounded-lg text-black"
                />
                <input
                  type="tel"
                  name="phone"
                  value={FooterState.phone}
                  onChange={(e) => {
                    let value = e.target.value.replace(/\D/g, "");
                    if (value.length > 10) {
                      value = value.slice(0, 10);
                    }
                    setFormState((prev) => ({ ...prev, phone: value }));
                  }}
                  inputMode="numeric" // mobile keyboard number only
                  pattern="[0-9]*"
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-transparent border border-gray-300 rounded-lg text-black"
                  placeholder="Moblie No."
                />
                <textarea
                  name="message"
                  value={FooterState.message}
                  onChange={handleInputChange}
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 bg-transparent border border-gray-300 rounded-lg text-black resize-none"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#2058FF] to-[#004BC2] text-white py-2 px-4 rounded-lg font-semibold hover:opacity-90 flex items-center justify-center gap-2 transition"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
                {message && (
                  <p
                    className={`text-sm mt-2 ${
                      message.type === "success"
                        ? "text-green-300"
                        : "text-red-300"
                    }`}
                  >
                    {message.text}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogContent;

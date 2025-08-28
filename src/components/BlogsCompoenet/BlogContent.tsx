"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

interface BlogContentProps {
  blogs: any[];
  title: string;
  Banner: StaticImageData;
  mobileBanner: StaticImageData;
}

const BlogContent: React.FC<BlogContentProps> = ({
  blogs,
  title,
  Banner,
  mobileBanner,
}) => {
  const [activeSection, setActiveSection] = useState<number | null>(-1);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  // Scroll to section
  const scrollToSection = (index: number) => {
    const section = sectionRefs.current[index + 1]; // +1 because intro = -1
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 100,
        behavior: "smooth",
      });
    }
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 150;
      let foundActive = -1;

      sectionRefs.current.forEach((sec, index) => {
        if (sec && sec.offsetTop <= scrollPos) {
          foundActive = index - 1; // shift back (-1 = intro)
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

  const renderSection = (section: any, index: number) => (
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

  const renderBlogSection = (blog: any, index: number) => (
    <section
      key={index}
      ref={(el) => {
        sectionRefs.current[index] = el;
      }}
      className="mb-8 sm:mb-12"
    >
      <h2 className="text-[24px] md:text-[26px] lg:text-[30px] font-bold text-transparent bg-gradient-to-l from-[#2058FF] to-[#004BC2] bg-clip-text mb-4 sm:mb-6">
        {blog.title}
      </h2>
      {renderDescriptions(blog.description)}
      {renderBullets(blog.bullets)}
      {blog.sections?.map((section: any, sectionIndex: number) =>
        renderSection(section, sectionIndex)
      )}
    </section>
  );

  return (
    <div className="w-full bg-white">
      <div className="mx-auto px-4 sm:px-6  flex flex-col lg:flex-row gap-8">
        {/* Left Column: Banner + Blog */}
        <div className="flex-1">
          {/* Banner */}
          <div className="relative w-full h-[200px] sm:h-[250px] md:h-[400px] lg:h-[500px] mb-10">
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
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="hidden lg:block w-1/5 flex-shrink-0">
          <div className="sticky top-20 space-y-8">
            {/* Article Nav */}
            <motion.div
              className="bg-gray-50 rounded-lg p-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-semibold text-lg mb-4 text-gray-900">
                In this article
              </h3>
              <nav className="space-y-2">
                <motion.button
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className={`block w-full text-left text-sm font-medium mb-3 py-2 pl-4 border-l-2 rounded-r-md transition-all duration-300 ${
                    activeSection === -1
                      ? "text-black text-md bg-blue-50 border-blue-600"
                      : "text-blue-600 hover:bg-blue-50 border-blue-400 hover:border-blue-600"
                  }`}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Introduction
                </motion.button>
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
            <div className="space-y-6 border border-gray-400 py-4 px-3 rounded-lg">
              <h3 className="text-xl font-bold border-b-2 border-white/30 pb-2 inline-block text-[#2058FF]">
                Contact Us
              </h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-grey-400 rounded-lg "
                />
                <input
                  type="email"
                  placeholder="Email Id"
                  className="w-full px-4 py-3 border border-grey-100 rounded-lg"
                />
                <input
                  type="tel"
                  placeholder="Mobile No."
                  className="w-full px-4 py-3 border border-grey-100 rounded-lg"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 border border-grey-100 rounded-lg"
                />
                <button
                  type="submit"
                  className="w-full bg-[#2058FF] text-white py-3 px-6 rounded-lg font-semibold hover:bg-white/90 transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  Send Message
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogContent;

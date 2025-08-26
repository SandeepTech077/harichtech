"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/Logo/logo-white.svg";
import facebookLogo from "../../../public/SVG/facebook-logo.svg";
import instagramLogo from "../../../public/SVG/instagram-logo.svg";
import linkedinLogo from "../../../public/SVG/linkedin-logo.svg";
import { sendFooterMessage } from "@/api/footer"

const Footer = () => {
  const currentYear = new Date().getFullYear();


  const [FooterState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  // Data
  const servicesData = [
    {
      name: "Web & App Development",
      path: "/services/web-and-app-development",
    },
    { name: "UI/UX Design", path: "/services/ui-ux-design" },
    { name: "Digital Marketing", path: "/services/digital-marketing" },
  ];

  const industriesData = [
    { name: "Real Estate", path: "/industries/real-estate" },
    { name: "E-commerce", path: "/industries/ecommerce" },
    { name: "Finance & Fintech", path: "/industries/finance" },
    { name: "Healthcare / Pharma", path: "/industries/healthcare" },
    { name: "Education", path: "/industries/education" },
    { name: "Retail", path: "/industries/retail" },
  ];

  const hireDevelopers = [
    "Hire React.js Developer",
    "Hire Node.js Developer",
    "Hire Next.js Developer",
    "Hire React Native Developer",
  ];

  const socialLinks = [
    { icon: facebookLogo, path: "https://facebook.com/harichtech", name: "Facebook" },
    { icon: linkedinLogo, path: "https://www.linkedin.com/company/harich-tech/posts/?feedView=all", name: "LinkedIn" },
    { icon: instagramLogo, path: "https://instagram.com/harichtech", name: "Instagram" },
  ];

  // Input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Submit
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
      setMessage({ type: "error", text: "Server error, please try again later." });
      setTimeout(() => setMessage(null), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <footer className="w-full px-4 sm:px-6 lg:px-8 pb-6">
      <div className="w-full mx-auto bg-gradient-to-r from-[#1E5AFF] to-[#004BC2] text-white rounded-2xl overflow-hidden">
        <div className="px-6 sm:px-8 lg:px-16 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            
            {/* Logo & Address */}
            <div className="lg:col-span-1 space-y-6">
              <Image src={Logo} alt="Harich Technologies" width={200} height={50} priority />
              <div className="space-y-4">
                <p className="text-sm leading-relaxed text-white/90">
                  Shilp 3, 3rd Floor, Sindhu Bhavan Road,
                  <br /> Shilp Circle, Above Bajarang Grocery,
                  <br /> Bodakdev, Ahmedabad, Gujarat
                  <br /> 380054.
                </p>
                <div className="flex space-x-3 sm:space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 bg-white/95 hover:bg-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                    >
                      <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 relative">
                        <Image src={social.icon} alt={social.name} fill className="object-contain" />
                      </div>
                    </a>
                  ))}
                </div>
                <div className="pt-4 space-y-2">
                  <a href="tel:+918200665684" className="block text-lg font-semibold hover:text-blue-200">
                    +91 8200 66 5684
                  </a>
                  <a href="mailto:info@harichtech.com" className="block text-sm text-white/90 hover:text-white">
                    info@harichtech.com
                  </a>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold border-b-2 border-white/30 pb-2">Services</h3>
              <ul className="space-y-3">
                {servicesData.map((service) => (
                  <li key={service.name}>
                    <Link href={service.path} className="text-white/90 hover:text-white text-sm">
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Industries */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold border-b-2 border-white/30 pb-2">Industries</h3>
              <ul className="space-y-3">
                {industriesData.map((industry) => (
                  <li key={industry.name}>
                    <Link href={industry.path} className="text-white/90 hover:text-white text-sm">
                      {industry.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Hire Developers */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold border-b-2 border-white/30 pb-2">Hire Developers</h3>
              <ul className="space-y-3">
                {hireDevelopers.map((developer) => (
                  <li key={developer}>
                    <Link href="#" className="text-white/90 hover:text-white text-sm">
                      {developer}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Form */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold border-b-2 border-white/30 pb-2">Get In Touch</h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  value={FooterState.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-transparent border border-white/30 rounded-lg text-white"
                />
                <input
                  type="email"
                  name="email"
                  value={FooterState.email}
                  onChange={handleInputChange}
                  placeholder="Email Id"
                  className="w-full px-4 py-3 bg-transparent border border-white/30 rounded-lg text-white"
                />
             <input
                    type="tel"
                    name="phone"
                    value={FooterState.phone}
                    onChange={(e) => {
                      // sirf digits allow
                      let value = e.target.value.replace(/\D/g, "");
                      // max 10 digit hi rakho
                      if (value.length > 10) {
                        value = value.slice(0, 10);
                      }
                      setFormState((prev) => ({ ...prev, phone: value }));
                    }}
                    inputMode="numeric" // mobile keyboard number only
                    pattern="[0-9]*"
                    disabled={isSubmitting}
                    className={`"w-full px-4 py-3 bg-transparent border border-white/30 rounded-lg text-white" $
                      FooterState.phone ?
                    `}
                    placeholder="Moblie No."
                  />
                <textarea
                  name="message"
                  value={FooterState.message}
                  onChange={handleInputChange}
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 bg-transparent border border-white/30 rounded-lg text-white resize-none"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-white text-blue-600 py-3 px-6 rounded-lg font-semibold hover:bg-white/90 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
                {message && (
                  <p className={`text-sm mt-2 ${message.type === "success" ? "text-green-300" : "text-red-300"}`}>
                    {message.text}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 px-6 sm:px-8 lg:px-16 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/70">Copyright © {currentYear} Harichtech | All Rights Reserved</p>
            <div className="flex items-center gap-6">
              <Link href="#" className="text-sm text-white/70 hover:text-white">Privacy Policy</Link>
              <span className="text-white/40">|</span>
              <Link href="#" className="text-sm text-white/70 hover:text-white">Terms & Condition</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

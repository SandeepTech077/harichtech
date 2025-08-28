"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/Logo/logo-white.svg";
import facebookLogo from "../../../public/SVG/facebook-logo.svg";
import instagramLogo from "../../../public/SVG/instagram-logo.svg";
import linkedinLogo from "../../../public/SVG/linkedin-logo.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const servicesData = [
    {
      name: "Web & App Development",
      path: "/services/web-and-app-development",
      children: [
        { name: "React.js Development", path: "/services/development/react" },
        { name: "Node.js Development", path: "/services/development/node" },
        { name: "Next.js Development", path: "/services/development/next" },
        {
          name: "React Native Development",
          path: "/services/development/react-native",
        },
      ],
    },
    {
      name: "UI/UX Design",
      path: "/services/ui-ux-design",
      children: [
        {
          name: "Website Design",
          path: "/services/ui-ux-design/website-design",
        },
        {
          name: "Mobile App Design",
          path: "/services/ui-ux-design/mobile-app-design",
        },
        {
          name: "Product Design",
          path: "/services/ui-ux-design/product-design",
        },
      ],
    },
    {
      name: "Digital Marketing",
      path: "/services/digital-marketing",
      children: [
        {
          name: "SEO",
          path: "/services/digital-marketing/search-engine-optimization-services",
        },
        {
          name: "PPC Advertisement",
          path: "/services/digital-marketing/ppc-advertising-services",
        },
        {
          name: "Social Media Marketing",
          path: "/services/digital-marketing/social-media-marketing-services",
        },
        {
          name: "Content Marking",
          path: "/services/digital-marketing/content-marketing-services",
        },
        {
          name: "Email Marketing",
          path: "/services/digital-marketing/email-marketing-services",
        },
        {
          name: "Analytics & Reporting",
          path: "/services/digital-marketing/analytics-reporting",
        },
        {
          name: "Influencer Marketing",
          path: "/services/digital-marketing/influencer-marketing-services",
        },
      ],
    },
  ];

  const industriesData = [
    { name: "Real Estate", path: "/industries/real-estate" },
    { name: "E-commerce", path: "/industries/ecommerce" },
    { name: "Finance & Fintech", path: "/industries/finance" },
    { name: "Healthcare & Pharma", path: "/industries/healthcare" },
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
    {
      icon: facebookLogo,
      path: "https://facebook.com/harichtech",
      name: "Facebook",
    },
    {
      icon: linkedinLogo,
      path: "https://www.linkedin.com/company/harich-tech/posts/?feedView=all",
      name: "LinkedIn",
    },
    {
      icon: instagramLogo,
      path: "https://instagram.com/harichtech",
      name: "Instagram",
    },
  ];

  return (
    <footer className="w-full px-4 sm:px-6 lg:px-8 pb-6 text-center">
      <div className="w-full mx-auto bg-gradient-to-r from-[#1E5AFF] to-[#004BC2] text-white rounded-2xl overflow-hidden">
        {/* Main Content */}
        <div className="px-6 sm:px-8 lg:px-16 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-5">
            {/* Logo and Address Section */}
            <div className="lg:col-span-1 space-y-4 flex flex-col items-center text-center lg:items-start lg:text-left mr-3">
              <Image
                src={Logo}
                alt="Harich Technologies"
                width={200}
                height={50}
                className="mb-6"
                priority
              />
              <div className="space-y-4">
                <p className="text-sm leading-relaxed text-white/90">
                  Shilp 3, 3rd Floor, Sindhu Bhavan Road,
                  <br />
                  Shilp Circle, Above Bajarang Grocery,
                  <br />
                  Bodakdev, Ahmedabad, Gujarat 380054.
                </p>

                {/* Social Links */}
                <div className="flex justify-center lg:justify-start space-x-4 sm:space-x-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
                      aria-label={`Visit our ${social.name} profile`}
                    >
                      <div className="w-10 h-10 sm:w-5 sm:h-5 lg:w-10 lg:h-10 relative mt-2">
                        <Image
                          src={social.icon}
                          alt={social.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </a>
                  ))}
                </div>

                <div className="pt-4 space-y-2">
                  <a
                    href="tel:+918200665684"
                    className="block text-lg font-semibold hover:text-blue-200 transition-colors duration-300"
                  >
                    +91 8200 66 5684
                  </a>
                  <a
                    href="mailto:info@harichtech.com"
                    className="block text-sm text-white/90 hover:text-white transition-colors duration-300"
                  >
                    info@harichtech.com
                  </a>
                </div>
              </div>
            </div>

            {/* Services Section */}
            <div className="hidden sm:block space-y-6 text-center lg:text-left">
              <h3 className="text-xl font-bold text-white border-b-2 border-white/30 pb-2 inline-block">
                Services
              </h3>
              <ul className="space-y-3">
                {servicesData.map((service) => (
                  <li key={service.name}>
                    <Link
                      href={service.path}
                      className="text-white/90 hover:text-white transition-colors duration-300 text-sm"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Industries Section */}
            <div className="hidden sm:block space-y-6 text-center lg:text-left">
              <h3 className="text-xl font-bold text-white border-b-2 border-white/30 pb-2 inline-block">
                Industries
              </h3>
              <ul className="space-y-3">
                {industriesData.map((industry) => (
                  <li key={industry.name}>
                    <Link
                      href={industry.path}
                      className="text-white/90 hover:text-white transition-colors duration-300 text-sm"
                    >
                      {industry.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Hire Developers Section */}
            <div className="hidden sm:block space-y-6 text-center lg:text-left">
              <h3 className="text-xl font-bold text-white border-b-2 border-white/30 pb-2 inline-block">
                Hire Developers
              </h3>
              <ul className="space-y-3">
                {hireDevelopers.map((developer) => (
                  <li key={developer}>
                    <Link
                      href="#"
                      className="text-white/90 hover:text-white transition-colors duration-300 text-sm"
                    >
                      {developer}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Form Section */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white border-b-2 border-white/30 pb-2 inline-block">
                Get In Touch
              </h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-transparent border border-white/30 rounded-lg text-white placeholder-white/70 focus:border-white focus:outline-none transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email Id"
                  className="w-full px-4 py-3 bg-transparent border border-white/30 rounded-lg text-white placeholder-white/70 focus:border-white focus:outline-none transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Mobile No."
                  className="w-full px-4 py-3 bg-transparent border border-white/30 rounded-lg text-white placeholder-white/70 focus:border-white focus:outline-none transition-colors"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 bg-transparent border border-white/30 rounded-lg text-white placeholder-white/70 focus:border-white focus:outline-none transition-colors resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-white text-blue-600 py-3 px-6 rounded-lg font-semibold hover:bg-white/90 transition-colors duration-300 flex items-center justify-center gap-2"
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

        {/* Bottom Section */}
        <div className="border-t border-white/20 px-6 sm:px-8 lg:px-16 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm font-bold text-white">
              Copyright © {currentYear} Harichtech | All Rights Reserved
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="#"
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <span className="text-white/40">|</span>
              <Link
                href="#"
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                Terms & Condition
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

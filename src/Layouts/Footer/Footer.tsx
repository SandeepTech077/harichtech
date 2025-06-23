"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "../../../public/Logo/logo-white.svg";
import facebookLogo from "../../../public/SVG/facebook-logo.svg";
import instagramLogo from "../../../public/SVG/instagram-logo.svg";
import linkedinLogo from "../../../public/SVG/linkedin-logo.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Our work", path: "/our-work" },
    { name: "About us", path: "/about-us" },
    { name: "Blogs", path: "/blog" },
    { name: "Career", path: "/career" },
    { name: "Contact us", path: "/contact-us" },
  ];

  const socialLinks = [
    {
      icon: linkedinLogo,
      path: "https://www.linkedin.com/company/harich-tech/posts/?feedView=all",
      name: "LinkedIn",
    },
    {
      icon: facebookLogo,
      path: "https://facebook.com/harichtech",
      name: "Facebook",
    },
    {
      icon: instagramLogo,
      path: "https://instagram.com/harichtech",
      name: "Instagram",
    },
  ];

  return (
    <footer className="w-full px-3 sm:px-6 lg:px-10 pb-4 sm:pb-6 lg:pb-10">
      <div className="w-full mx-auto bg-gradient-to-r from-[#1E5AFF] to-[#004BC2] text-white rounded-xl sm:rounded-2xl overflow-hidden">
        {/* Main Content */}
        <div className="px-4 sm:px-8 lg:px-12 py-6 sm:py-8 lg:py-12">
          <div className="flex flex-col gap-6 sm:gap-8 lg:flex-row lg:justify-between lg:items-center lg:gap-12">
            
            {/* Logo Section */}
            <div className="flex flex-col items-center sm:items-start space-y-3 sm:space-y-4 lg:space-y-6">
              <Image
                src={Logo}
                alt="Harich Technologies"
                width={160}
                height={40}
                className="sm:w-[180px] sm:h-[45px] lg:w-[200px] lg:h-[60px]"
              />
              
              {/* Address - Better mobile formatting */}
              <div className="max-w-sm text-center sm:text-left">
                <p className="text-xs sm:text-sm lg:text-base font-medium text-white/90 leading-relaxed">
                  Shilp 3, 3rd Floor, Sindhu Bhavan Road,<br className="hidden sm:block" /> 
                  Shilp Circle, Above Bajarang Grocery,<br className="hidden sm:block" />
                  Bodakdev, Ahmedabad, Gujarat 380054
                </p>
              </div>
            </div>

            {/* Contact & Social Section */}
            <div className="flex flex-col items-center sm:items-end space-y-4 sm:space-y-5">
              
              {/* Contact Info - Mobile optimized */}
              <div className="text-center sm:text-right space-y-1">
                <a 
                  href="tel:+918200665684"
                  className="block text-base sm:text-lg lg:text-xl font-semibold hover:text-blue-200 transition-colors duration-300"
                >
                  +91-8200 66 5684
                </a>
                <a 
                  href="mailto:info@harichtech.com"
                  className="block text-sm sm:text-base lg:text-lg text-white/90 hover:text-white transition-colors duration-300"
                >
                  info@harichtech.com
                </a>
              </div>

              {/* Social Links - Better mobile spacing */}
              <div className="flex items-center justify-center sm:justify-end space-x-3 sm:space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 bg-white/95 hover:bg-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
                    aria-label={social.name}
                  >
                    <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 relative">
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
            </div>
          </div>
        </div>

        {/* Navigation Links Section */}
        <div className="border-t border-white/20 px-4 sm:px-8 lg:px-12 py-4 sm:py-5 lg:py-6">
          <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:justify-between sm:items-center">
            
            {/* Navigation Links - Mobile grid layout */}
            <nav className="w-full sm:w-auto">
              {/* Mobile: 2-column grid */}
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 sm:hidden">
                {quickLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.path}
                    className="text-sm text-white/90 hover:text-white transition-colors duration-300 font-medium py-1 text-center"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              
              {/* Tablet and Desktop: horizontal with separators */}
              <div className="hidden sm:flex flex-wrap items-center gap-2 lg:gap-4">
                {quickLinks.map((link, index) => (
                  <div key={link.name} className="flex items-center">
                    <Link
                      href={link.path}
                      className="text-sm lg:text-base text-white/90 hover:text-white transition-colors duration-300 font-medium whitespace-nowrap"
                    >
                      {link.name}
                    </Link>
                    {index < quickLinks.length - 1 && (
                      <span className="text-white/40 ml-2 lg:ml-4">|</span>
                    )}
                  </div>
                ))}
              </div>
            </nav>

            {/* Copyright */}
            <div className="border-t border-white/10 pt-3 sm:border-t-0 sm:pt-0">
              <p className="text-xs sm:text-sm lg:text-sm text-white/70 text-center sm:text-right">
                © {currentYear} Harichtech. All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
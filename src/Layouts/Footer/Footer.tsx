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
      path: "https://linkedin.com/company/harichtech",
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
    <footer className="w-full px-4 sm:px-6 lg:px-10 pb-6 lg:pb-10">
      <div className="w-full mx-auto bg-gradient-to-r from-[#1E5AFF] to-[#004BC2] text-white rounded-2xl overflow-hidden">
        {/* Main Content */}
        <div className="px-6 sm:px-8 lg:px-12 py-8 lg:py-12">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-12">
            {/* Left Section - Logo and Address */}
            <div className=" space-y-4 lg:space-y-6">
              <Image
                src={Logo}
                alt="Harich Technologies"
                width={200}
                height={50}
                className="lg:w-[200px] lg:h-[60px]"
              />
              <div className="space-y-2 max-w-xs">
                <p className="text-sm lg:text-base font-medium text-white/90">
                  Shilp 3, 3rd Floor, Sindhu Bhavan Road, Shilp Circle, Above
                  Bajarang Grocery, Bodakdev, Ahmedabad, Gujarat 380054.
                </p>
              </div>
            </div>

            {/* Right Section - Contact Info and Social */}
            <div className="sm:flex-row items-start sm:items-center gap-6 lg:gap-8">
              <div className="flex items-center space-x-3 lg:space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 lg:w-12 lg:h-12 bg-white rounded-full flex items-center justify-center transition-all duration-300 "
                    aria-label={social.name}
                  >
                    <div className="w-5 h-5 lg:w-6 lg:h-6 relative">
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

              {/* Contact Info */}
              <div className="text-right space-y-1 py-5">
                <p className="text-sm lg:text-lg font-semibold">
                  +91-8200 66 5684
                </p>
                <p className="text-sm lg:text-lg text-white/90">
                  info@harichtech.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="border-t border-white/20 px-6 sm:px-8 lg:px-12 py-4 lg:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            {/* Navigation Links */}
            <nav className="flex flex-wrap justify-center sm:justify-start items-center gap-4 lg:gap-8">
              {quickLinks.map((link, index) => (
                <div key={link.name} className="flex items-center">
                  <Link
                    href={link.path}
                    className="text-sm lg:text-base text-white/90 hover:text-white transition-colors duration-300 font-medium"
                  >
                    {link.name}
                  </Link>
                  {index < quickLinks.length - 1 && (
                    <span className="text-white/40 ml-4 lg:ml-8">|</span>
                  )}
                </div>
              ))}
            </nav>

            {/* Copyright */}
            <p className="text-xs lg:text-sm text-white/70 text-center sm:text-right">
              Copyright {currentYear} Harichtech | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

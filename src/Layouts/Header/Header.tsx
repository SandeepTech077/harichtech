"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X} from "lucide-react";
import phoneicon from "../../../public/SVG/call.svg";
import mailicon from "../../../public/SVG/email.svg";
import MobilePhoneIcon from "../../../public/SVG/mobile-phone.svg";
import MobileEMailIcon from "../../../public/SVG/mobile-email.svg";
import Logo from "../../../public/Logo/Logo.svg";
import linkedinIcon from "../../../public/SVG/linkedin-logo.svg";
import facebookIcon from "../../../public/SVG/facebook-logo.svg";
import instagramIcon from "../../../public/SVG/instagram-logo.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "About us", path: "/about-us" },
    { name: "Blog", path: "/blog" },
    { name: "Career", path: "/career" },
    // { name: "Contact Us", path: "/contact-us" },
  ];

  const socialLinks = {
    linkedin: "https://www.linkedin.com/company/harich-tech",
    facebook: "https://www.facebook.com/harichtech",
    instagram: "https://www.instagram.com/harichtech",
  };

  return (
    <div className="w-full overflow-x-hidden">
      {/* Top Contact Bar - Hidden on mobile for better UX */}
      {!scrolled && (
        <div className="hidden sm:block fixed top-0 left-0 right-0 w-full text-white bg-gradient-to-r from-[#2058FF] via-[#1B4FE8] to-[#004BC2] py-2 sm:py-3 px-4 z-50">
          <div className="container mx-auto flex items-center justify-between max-w-7xl">
            {/* Contact Info */}
            <div className="flex items-center space-x-4 sm:space-x-6 min-w-0 flex-shrink">
              <div className="flex items-center space-x-2 group min-w-0">
                <div className="p-1.5  rounded-full  transition-colors flex-shrink-0">
                  <Image
                    src={phoneicon}
                    alt="Phone Icon"
                    width={20}
                    height={20}
                  />
                </div>
                <Link
                  href="tel:+91-8200665684"
                  className="text-xs sm:text-sm font-medium hover:text-blue-100 transition-colors truncate"
                >
                  +91-8200 66 5684
                </Link>
              </div>

              <div className="hidden md:flex items-center space-x-2 group min-w-0">
                <div className="p-1.5  rounded-full  flex-shrink-0">
                  <Image
                    src={mailicon}
                    alt="Phone Icon"
                    width={20}
                    height={20}
                  />
                </div>
                <Link
                  href="mailto:info@harichtech.com"
                  className="text-sm font-medium hover:text-blue-100 transition-colors truncate"
                >
                  info@harichtech.com
                </Link>
              </div>
            </div>

            {/* Social Links - FIXED: Consistent sizing for all social icons */}
            <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
              <Link
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white rounded-full hover:bg-gray-50 hover:scale-110 transition-all duration-300 group shadow-sm flex items-center justify-center flex-shrink-0"
                aria-label="Follow us on LinkedIn"
              >
                <Image
                  src={linkedinIcon}
                  alt="LinkedIn"
                  width={16}
                  className="h-auto group-hover:opacity-80"
                />
              </Link>

              <Link
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white rounded-full hover:bg-gray-50 hover:scale-110 transition-all duration-300 group shadow-sm flex items-center justify-center flex-shrink-0"
                aria-label="Follow us on Facebook"
              >
                <Image
                  src={facebookIcon}
                  alt="Facebook"
                  width={10}
                  className="h-auto group-hover:opacity-80"
                />
              </Link>

              <Link
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white rounded-full hover:bg-gray-50 hover:scale-110 transition-all duration-300 group shadow-sm flex items-center justify-center flex-shrink-0"
                aria-label="Follow us on Instagram"
              >
                <Image
                  src={instagramIcon}
                  alt="Instagram"
                  width={16}
                  className="h-auto group-hover:opacity-80"
                />
              </Link>
            </div>
          </div>
        </div>
      )}

      <header
        className={`fixed left-0 right-0 w-full z-40 transition-all duration-300 overflow-hidden ${
          scrolled
            ? "top-0 bg-white shadow-lg"
            : "sm:top-12 top-0 bg-white/95 backdrop-blur-md shadow-sm"
        }`}
      >
        <div className="w-full max-w-full">
          <div className="container mx-auto px-3 sm:px-4 lg:px-6 py-2 sm:py-3 flex items-center justify-between min-h-[60px] sm:min-h-[64px]">
            <Link href="/" className="flex items-center flex-shrink-0">
              <Image
                src={Logo}
                alt="Harich Technologies"
                className=" h-14 lg:h-14 w-auto max-w-[140px] sm:max-w-none"
                priority
              />
            </Link>

            <nav className="hidden lg:flex items-center flex-1 justify-center">
              <ul className="flex items-center space-x-6 xl:space-x-8">
                {navItems.map((item) => {
                  const isActive = pathname === item.path;
                  return (
                    <li key={item.name} className="group">
                      <Link
                        href={item.path}
                        className={`text-sm lg:text-lg font-semibold transition-all duration-300 relative py-2 px-1 whitespace-nowrap ${
                          isActive
                            ? "text-transparent bg-gradient-to-r from-[#2058FF] to-[#004BC2] bg-clip-text after:absolute after:bottom-0 after:left-1/2 after:transform after:-translate-x-1/2 after:w-1.5 after:h-1.5 after:bg-gradient-to-r after:from-[#2058FF] after:to-[#004BC2] after:rounded-full"
                            : "text-gray-700 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#2058FF] group-hover:to-[#004BC2] group-hover:bg-clip-text"
                        }`}
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="hidden md:flex items-center flex-shrink-0">
              <Link href="/contact-us">
                <button className="relative cursor-pointer px-4 lg:px-6 py-2 lg:py-2.5 text-sm lg:text-base font-bold bg-white rounded-xl hover:shadow-lg transition-all duration-300 group whitespace-nowrap">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#2058FF] to-[#004BC2] rounded-xl p-[2px]">
                    <div className="w-full h-full bg-white group-hover:bg-gradient-to-r group-hover:from-[#2058FF] group-hover:to-[#004BC2] rounded-[10px] transition-all duration-300"></div>
                  </div>
                  <span className="relative flex items-center text-transparent bg-gradient-to-r from-[#2058FF] to-[#004BC2] bg-clip-text group-hover:text-white transition-all duration-300 z-10">
                    <span className="hidden lg:inline">Get in Touch</span>
                    <span className="lg:hidden">Contact</span>
                    <span className="ml-1 lg:ml-2 text-sm lg:text-lg group-hover:translate-x-1 transition-transform duration-300">
                      ↗
                    </span>
                  </span>
                </button>
              </Link>
            </div>

            <button
              className="flex items-center justify-center lg:hidden p-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300 touch-manipulation flex-shrink-0 w-10 h-10"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-45 lg:hidden backdrop-blur-sm"
          onClick={toggleMenu}
        />
      )}

      <div
        className={`fixed top-0 right-0 bottom-0 w-full max-w-[280px] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden overflow-hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full w-full overflow-hidden">
          {/* Mobile Header */}
          <div className="flex justify-between items-center p-4 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-indigo-50 flex-shrink-0">
            <Image
              src={Logo}
              alt="Harich Technologies"
              className="h-10 w-auto max-w-[140px]"
            />
            <button
              className="p-2 text-gray-600 hover:text-blue-600 hover:bg-white rounded-lg transition-all duration-300 touch-manipulation flex-shrink-0"
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              <X size={18} />
            </button>
          </div>

          <div className="mx-4 mt-4 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100 flex-shrink-0">
            <div className="flex flex-col space-y-2">
              <Link
                href="tel:+916200665954"
                className="flex items-center space-x-3 text-blue-600 hover:text-blue-700 transition-colors group min-w-0"
                onClick={toggleMenu}
              >
                <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors flex-shrink-0">
                 <Image
                    src={MobilePhoneIcon}
                    alt="Phone Icon"
                    width={20}
                    height={20}
                  />
                </div>
                <span className="font-medium text-sm truncate">
                  +91-6200-66-5954
                </span>
              </Link>
              <Link
                href="mailto:info@harichtech.com"
                className="flex items-center space-x-3 text-blue-600 hover:text-blue-700 transition-colors group min-w-0"
                onClick={toggleMenu}
              >
                <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors flex-shrink-0">
                     <Image
                    src={MobileEMailIcon}
                    alt="Phone Icon"
                    width={20}
                    height={20}
                  />
                </div>
                <span className="font-medium text-sm truncate">
                  info@harichtech.com
                </span>
              </Link>
            </div>
          </div>

          <nav className="flex-1 overflow-y-auto px-4 mt-4 pb-4">
            <ul className="space-y-1">
              {navItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <li key={item.name}>
                    <Link
                      href={item.path}
                      className={`block py-3 px-4 rounded-xl text-sm font-medium transition-all duration-300 touch-manipulation ${
                        isActive
                          ? "text-blue-600 font-semibold bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200"
                          : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                      }`}
                      onClick={toggleMenu}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="p-4 border-t border-gray-100 bg-gray-50 flex-shrink-0">
            <Link
              href="/contact-us"
              className="flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r from-[#2058FF] to-[#004BC2] text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 mb-4 group touch-manipulation"
              onClick={toggleMenu}
            >
              <span className="truncate">Get in Touch</span>
              <span className="ml-2 text-lg group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0">
                ↗
              </span>
            </Link>

            <div className="flex flex-col items-center justify-center space-y-3">
              <span className="text-xs font-medium text-gray-600 text-center">
                Follow Us
              </span>
              <div className="flex justify-center space-x-3">
                <Link
                  href={socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 border border-gray-300  text-white rounded-lg flex items-center justify-center "
                  aria-label="Facebook"
                >
                  <Image
                    src={facebookIcon}
                    alt="Facebook"
                    width={12}
                    height={12}
                  />
                </Link>
                <Link
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 border border-gray-300  text-white rounded-lg flex items-center justify-center "
                  aria-label="Instagram"
                >
                  <Image
                    src={instagramIcon}
                    alt="Instagram"
                    width={14}
                    height={14}
                  />
                </Link>
                <Link
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 border border-gray-300  text-white rounded-lg flex items-center justify-center "
                  aria-label="LinkedIn"
                >
                  <Image
                    src={linkedinIcon}
                    alt="LinkedIn"
                    width={14}
                    height={14}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

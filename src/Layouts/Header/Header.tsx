"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";
import Logo from "../../../public/Logo/Logo.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside or on navigation
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Our Work", path: "/our-work" },
    { name: "About us", path: "/about-us" },
    { name: "Blog", path: "/blog" },
    { name: "Career", path: "/career" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  // Social media links - replace with your actual URLs
  const socialLinks = {
    facebook: "https://www.facebook.com/harichtech", // Replace with your actual URL
    instagram: "https://www.instagram.com/harichtech", // Replace with your actual URL
    linkedin: "https://www.linkedin.com/company/harich-tech/posts/?feedView=all" // Replace with your actual URL
  };

  return (
    <>
      {/* Top Contact Bar */}
      <div className="fixed top-0 left-0 w-full bg-blue-600 text-white py-2 px-2 sm:px-4 text-xs sm:text-sm z-50">
        <div className="container mx-auto flex items-center justify-between max-w-7xl">
          {/* Contact Info - Hidden on very small screens, shown as single item on small screens */}
          <div className="flex items-center space-x-2 sm:space-x-6">
            <div className="hidden xs:flex items-center space-x-1 sm:space-x-2">
              <Phone size={12} className="sm:w-4 sm:h-4" />
              <span className="truncate">+91-6200-66-5954</span>
            </div>
            <div className="hidden sm:flex items-center space-x-2">
              <Mail size={14} />
              <span className="truncate">info@harichtech.com</span>
            </div>
            {/* Show only phone on extra small screens */}
            <div className="flex xs:hidden items-center space-x-1">
              <Phone size={12} />
              <span>Call Us</span>
            </div>
          </div>

          {/* Social Icons - Fixed with external links */}
          <div className="flex items-center space-x-1 sm:space-x-3">
            <a 
              href={socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center   transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={14} className="sm:w-5 sm:h-5" />
            </a>
            <a 
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center  transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={14} className="sm:w-5 sm:h-5" />
            </a>
            <a 
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={14} className="sm:w-5 sm:h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`fixed top-8 sm:top-10 left-0 w-full z-40 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-3 sm:px-4 lg:px-6 py-3 sm:py-4 flex items-center justify-between max-w-7xl">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src={Logo}
                alt="Harich Technologies"
                className="h-8 sm:h-10 lg:h-12 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center">
            <ul className="flex items-center space-x-6 xl:space-x-8">
              {navItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <li key={item.name}>
                    <Link
                      href={item.path}
                      className={`text-sm xl:text-base font-medium transition-colors relative py-2 ${
                        isActive
                          ? "text-blue-600 after:absolute after:bottom-0 after:left-1/2 after:transform after:-translate-x-1/2 after:w-1 after:h-1 after:bg-blue-600 after:rounded-full"
                          : "text-gray-700 hover:text-blue-600"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-4 lg:px-6 py-2 lg:py-2.5 border border-blue-600 rounded-md text-sm lg:text-base text-blue-600 font-medium hover:bg-blue-50 transition-colors whitespace-nowrap"
            >
              Get in Touch
              <span className="ml-1 text-xs">↗</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="flex items-center justify-center lg:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={30} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-45 lg:hidden"
          onClick={toggleMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[70%] bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex justify-between items-center p-4 sm:p-6 border-b border-gray-100">
            <Image
              src={Logo}
              alt="Harich Technologies"
              className="h-8 sm:h-10 w-auto"
            />
            <button
              className="p-2 text-gray-700 hover:text-blue-600 transition-colors"
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Mobile Contact Info */}
          <div className="mx-4 sm:mx-6 mt-4 p-4 bg-blue-50 rounded-lg">
            <div className="flex flex-col space-y-3 text-sm">
              <Link 
                href="tel:+916200665954"
                className="flex items-center space-x-3 text-blue-600 hover:text-blue-700 transition-colors"
              >
                <Phone size={16} />
                <span>+91-6200-66-5954</span>
              </Link>
              <Link 
                href="mailto:info@harichtech.com"
                className="flex items-center space-x-3 text-blue-600 hover:text-blue-700 transition-colors"
              >
                <Mail size={16} />
                <span>info@harichtech.com</span>
              </Link>
            </div>
          </div>

          {/* Mobile Navigation */}
          <nav className="flex-1 overflow-y-auto px-4 sm:px-6 mt-6">
            <ul className="space-y-1">
              {navItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <li key={item.name}>
                    <Link
                      href={item.path}
                      className={`block py-3 px-4 rounded-lg text-base transition-colors ${
                        isActive 
                          ? "text-blue-600 font-semibold bg-blue-50" 
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

          {/* Mobile Menu Footer */}
          <div className="p-4 sm:p-6 border-t border-gray-100">
            <Link
              href="/contact"
              className="flex items-center justify-center w-full px-4 py-3 border border-blue-600 rounded-lg text-blue-600 font-medium hover:bg-blue-50 transition-colors mb-4"
              onClick={toggleMenu}
            >
              Get in Touch
              <span className="ml-2 text-sm">↗</span>
            </Link>

            {/* Mobile Social Icons - Fixed with external links */}
            <div className="flex items-center justify-center space-x-4">
              <a 
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
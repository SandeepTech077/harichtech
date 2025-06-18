"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import Logo from "../../../public/Logo/Logo.svg";

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

  const socialLinks = {
    linkedin: "https://www.linkedin.com/company/harich-tech",
    facebook: "https://www.facebook.com/harichtech",
    instagram: "https://www.instagram.com/harichtech",
  };

  return (
    <>
      {/* Top Contact Bar - Enhanced Design */}
      {!scrolled && (
        <div className="fixed top-0 left-0 w-full text-white bg-gradient-to-r from-[#2058FF] via-[#1B4FE8] to-[#004BC2] py-3 px-4 z-50 shadow-lg">
          <div className="container mx-auto flex items-center justify-between max-w-7xl">
            {/* Contact Info */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 group">
                <div className="p-1.5 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors">
                  <Phone size={14} className="text-white" />
                </div>
                <Link
                  href="tel:+916200665954"
                  className="hidden sm:block text-sm font-medium hover:text-blue-100 transition-colors"
                >
                  +91-6200-66-5954
                </Link>
                <span className="sm:hidden text-sm font-medium">Call Us</span>
              </div>

              <div className="hidden md:flex items-center space-x-2 group">
                <div className="p-1.5 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors">
                  <Mail size={14} className="text-white" />
                </div>
                <Link
                  href="mailto:info@harichtech.com"
                  className="text-sm font-medium hover:text-blue-100 transition-colors"
                >
                  info@harichtech.com
                </Link>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-3">
              <span className="hidden sm:block text-xs font-medium text-blue-100 mr-2">
                Follow Us:
              </span>
              <Link
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 bg-white/10 rounded-full hover:bg-white/20 hover:scale-110 transition-all duration-300 group"
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin
                  size={16}
                  className="text-white group-hover:text-blue-100"
                />
              </Link>
              <Link
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 bg-white/10 rounded-full hover:bg-white/20 hover:scale-110 transition-all duration-300 group"
                aria-label="Follow us on Facebook"
              >
                <Facebook
                  size={16}
                  className="text-white group-hover:text-blue-100"
                />
              </Link>
              <Link
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 bg-white/10 rounded-full hover:bg-white/20 hover:scale-110 transition-all duration-300 group"
                aria-label="Follow us on Instagram"
              >
                <Instagram
                  size={16}
                  className="text-white group-hover:text-blue-100"
                />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Main Header */}
      <header
        className={`fixed left-0 w-full z-40 transition-all duration-300 ${
          scrolled
            ? "top-0 bg-white shadow-lg"
            : "top-12 bg-white/95 backdrop-blur-md shadow-sm"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-6 py-3 flex items-center justify-between ">
          <Link href="/" className="flex items-center">
            <Image
              src={Logo}
              alt="Harich Technologies"
              className="h-10 sm:h-12 lg:h-14 w-auto"
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center">
            <ul className="flex items-center space-x-8">
              {navItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <li key={item.name}>
                    <Link
                      href={item.path}
                      className={`text-base font-semibold transition-all duration-300 relative py-2 px-1 ${
                        isActive
                          ? "text-blue-600 after:absolute after:bottom-0 after:left-1/2 after:transform after:-translate-x-1/2 after:w-1.5 after:h-1.5 after:bg-blue-600 after:rounded-full"
                          : "text-gray-700 hover:text-blue-600  "
                      }`}
                      style={
                        !isActive
                          ? {
                              transition: "all 0.3s ease",
                            }
                          : {}
                      }
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="hidden md:flex items-center">
            <Link href="/contact-us">
              <button className="relative cursor-pointer px-6 py-2.5 text-base font-bold bg-white rounded-xl hover:shadow-lg transition-all duration-300 group">
                {/* Perfect 2px gradient border */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#2058FF] to-[#004BC2] rounded-xl p-[2px]">
                  <div className="w-full h-full bg-white group-hover:bg-gradient-to-r group-hover:from-[#2058FF] group-hover:to-[#004BC2] rounded-[10px] transition-all duration-300"></div>
                </div>

                {/* Content */}
                <span className="relative flex items-center text-transparent bg-gradient-to-r from-[#2058FF] to-[#004BC2] bg-clip-text group-hover:text-white transition-all duration-300 z-10">
                  Get in Touch
                  <span className="ml-2 text-lg group-hover:translate-x-1 transition-transform duration-300">
                    ↗
                  </span>
                </span>
              </button>
            </Link>
          </div>

          <button
            className="flex items-center justify-center lg:hidden p-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-45 lg:hidden backdrop-blur-sm"
          onClick={toggleMenu}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[75%] max-w-sm bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Header */}
          <div className="flex justify-between items-center p-6 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-indigo-50">
            <Image
              src={Logo}
              alt="Harich Technologies"
              className="h-10 w-auto"
            />
            <button
              className="p-2 text-gray-600 hover:text-blue-600 hover:bg-white rounded-lg transition-all duration-300"
              onClick={toggleMenu}
            >
              <X size={24} />
            </button>
          </div>

          {/* Contact Info Card */}
          <div className="mx-6 mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
            <div className="flex flex-col space-y-3">
              <Link
                href="tel:+916200665954"
                className="flex items-center space-x-3 text-blue-600 hover:text-blue-700 transition-colors group"
                onClick={toggleMenu}
              >
                <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                  <Phone size={16} />
                </div>
                <span className="font-medium">+91-6200-66-5954</span>
              </Link>
              <Link
                href="mailto:info@harichtech.com"
                className="flex items-center space-x-3 text-blue-600 hover:text-blue-700 transition-colors group"
                onClick={toggleMenu}
              >
                <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                  <Mail size={16} />
                </div>
                <span className="font-medium">info@harichtech.com</span>
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto px-6 mt-6">
            <ul className="space-y-2">
              {navItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <li key={item.name}>
                    <Link
                      href={item.path}
                      className={`block py-3 px-4 rounded-xl text-base font-medium transition-all duration-300 ${
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

          {/* Bottom Section */}
          <div className="p-6 border-t border-gray-100 bg-gray-50">
            <Link
              href="/contact-us"
              className="flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r from-[#2058FF] to-[#004BC2] text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 mb-6 group"
              onClick={toggleMenu}
            >
              Get in Touch
              <span className="ml-2 text-lg group-hover:translate-x-1 transition-transform duration-300">
                ↗
              </span>
            </Link>

            {/* Social Links */}
            <div className="flex items-center justify-center space-x-4">
              <span className="text-sm font-medium text-gray-600 mb-2 block w-full text-center">
                Follow Us
              </span>
              <div className="flex space-x-3">
                <Link
                  href={socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-300"
                >
                  <Facebook size={20} />
                </Link>
                <Link
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-300"
                >
                  <Instagram size={20} />
                </Link>
                <Link
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-r from-blue-700 to-blue-800 text-white rounded-xl flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-300"
                >
                  <Linkedin size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

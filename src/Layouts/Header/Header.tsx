// components/Header.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Our Work", path: "/our-work" },
    { name: "About us", path: "/about-us" },
    { name: "Blog", path: "/blog" },
    // { name: "Career", path: "/career" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white/90"
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <div className="flex items-center">
              <Image
                src={Logo}
                alt="Harich Technologies"
                className="h-10 w-auto"
              />
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <nav>
            <ul className="flex space-x-8">
              {navItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <li key={item.name}>
                    <Link
                      href={item.path}
                      className={`text-gray-700 hover:text-blue-500 transition-colors relative ${
                        isActive
                          ? "after:absolute after:bottom-[-6px] after:left-1/2 after:transform after:-translate-x-1/2 after:w-1 after:h-1 after:bg-blue-600 after:rounded-full"
                          : ""
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        {/* Search and CTA Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="/contact"
            className="inline-flex items-center px-4 py-2 border border-blue-600 rounded-md text-blue-600 font-medium hover:bg-blue-50 transition-colors"
          >
            Get in Touch <span className="ml-1">↗</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <button
            className="p-2 text-gray-700"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Slide-in */}
      <div
        className={`fixed top-0 right-0 h-full w-4/5 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <Image
              src={Logo}
              alt="Harich Technologies"
              width={120}
              height={30}
              className="h-8 w-auto"
            />
            <button
              className="text-gray-700"
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          <nav className="mt-8">
            <ul className="space-y-4">
              {navItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <li key={item.name} className="border-b border-gray-100 pb-3">
                    <Link
                      href={item.path}
                      className={`block text-lg ${
                        isActive ? "text-blue-600 font-medium" : "text-gray-700"
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

          <div className="mt-8 flex flex-col space-y-4">
            <Link
              href="/contact"
              className="flex items-center justify-center px-4 py-2 border border-blue-600 rounded-md text-blue-600 font-medium hover:bg-blue-50 transition-colors"
              onClick={toggleMenu}
            >
              Get in Touch <span className="ml-1">↗</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleMenu}
        />
      )}
    </header>
  );
};

export default Header;

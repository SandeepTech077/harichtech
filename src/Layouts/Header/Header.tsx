"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { navItems, socialLinks } from "./navLinks";
import MobileSidebar from "./MobileSidebar";
import MobilePhoneIcon from "../../../public/SVG/mobile-phone.svg";
import MobileEMailIcon from "../../../public/SVG/mobile-email.svg";
import Logo from "../../../public/Logo/Logo.svg";
import linkedinIcon from "../../../public/SVG/linkedin-logo.svg";
import facebookIcon from "../../../public/SVG/facebook-logo.svg";
import instagramIcon from "../../../public/SVG/instagram-logo.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [submenuTimeout, setSubmenuTimeout] = useState<NodeJS.Timeout | null>(
    null
  );

  const pathname = usePathname();

  const handleSubmenuEnter = (subItemName: string) => {
    if (submenuTimeout) clearTimeout(submenuTimeout);
    setActiveSubmenu(subItemName);
  };

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
        setActiveDropdown(null);
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

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
      setActiveSubmenu(null);
    }, 200); // 200ms delay
    setSubmenuTimeout(timeout);
  };

  const handleMouseEnter = (itemName: string) => {
    if (submenuTimeout) clearTimeout(submenuTimeout);
    setActiveDropdown(itemName);
  };

  const handleSubmenuLeave = () => {
    const timeout = setTimeout(() => {
      setActiveSubmenu(null);
    }, 200); // optional: you can remove this if only parent needs delay
    setSubmenuTimeout(timeout);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".dropdown-container")) {
        setActiveDropdown(null);
      }
    };

    if (activeDropdown) {
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }
  }, [activeDropdown]);

  return (
    <div className="w-full overflow-x-hidden">
      {/* Top Contact Bar - Hidden on mobile for better UX */}
      {!scrolled && (
        <div className="hidden sm:block fixed top-0 left-0 right-0 w-full py-2 sm:py-3 px-4 z-50 bg-white">
          <div className="container mx-auto flex items-center justify-between max-w-7xl">
            {/* Contact Info */}
            <div className="flex items-center space-x-4 sm:space-x-6 min-w-0 flex-shrink">
              <div className="flex items-center space-x-2 group min-w-0">
                <div className="p-1.5 rounded-full transition-colors flex-shrink-0">
                  <Image
                    src={MobilePhoneIcon}
                    alt="Phone Icon"
                    width={20}
                    height={20}
                  />
                </div>
                <Link
                  href="tel:+91-8200665684"
                  className="text-xs sm:text-sm font-medium hover:text-blue-100 transition-colors truncate"
                >
                  +91 8200 66 5684
                </Link>
              </div>

              <div className="hidden md:flex items-center space-x-2 group min-w-0">
                <div className="p-1.5 rounded-full flex-shrink-0">
                  <Image
                    src={MobileEMailIcon}
                    alt="Email Icon"
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

            {/* Social Links */}
            <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
              <Link
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white rounded-full hover:bg-gray-50 hover:scale-110 transition-all duration-300 group flex items-center justify-center flex-shrink-0"
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
                className="w-8 h-8 bg-white rounded-full hover:bg-gray-50 hover:scale-110 transition-all duration-300 group flex items-center justify-center flex-shrink-0"
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
                className="w-8 h-8 bg-white rounded-full hover:bg-gray-50 hover:scale-110 transition-all duration-300 group flex items-center justify-center flex-shrink-0"
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
        className={`fixed left-0 right-0 w-full z-40 transition-all duration-300 ${
          scrolled
            ? "top-0 bg-white shadow-lg"
            : "sm:top-12 top-0 bg-white/98 backdrop-blur-md shadow-lg"
        }`}
      >
        <div className="w-full max-w-full">
          <div className="container mx-auto px-3 sm:px-4 lg:px-6 py-2 sm:py-3 flex items-center justify-between min-h-[60px] sm:min-h-[64px]">
            <Link href="/" className="flex items-center flex-shrink-0">
              <Image
                src={Logo}
                alt="Harich Technologies"
                className="h-14 lg:h-14 w-auto max-w-[140px] sm:max-w-none"
                priority
              />
            </Link>

            <nav className="hidden lg:flex items-center flex-1 justify-center">
              <ul className="flex items-center space-x-6 xl:space-x-8">
                {navItems.map((item) => {
                  const isActive = pathname === item.path;
                  const hasDropdown = item.hasDropdown && item.data;
                  const isDropdownActive = activeDropdown === item.name;
                  const isIndustries = item.name === "Industries";

                  return (
                    <li
                      key={item.name}
                      className="group relative dropdown-container"
                      onMouseEnter={() =>
                        hasDropdown && handleMouseEnter(item.name)
                      }
                      onMouseLeave={handleMouseLeave}
                    >
                      {isIndustries ? (
                        <div
                          className={`text-sm lg:text-lg font-semibold transition-all duration-300 relative py-2 px-1 whitespace-nowrap flex items-center cursor-default ${
                            isActive
                              ? "text-transparent bg-gradient-to-r from-[#2058FF] to-[#004BC2] bg-clip-text"
                              : "text-gray-700 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#2058FF] group-hover:to-[#004BC2] group-hover:bg-clip-text"
                          }`}
                        >
                          {item.name}
                          {hasDropdown && (
                            <ChevronDown
                              size={16}
                              className={`ml-1 transition-transform duration-200 ${
                                isDropdownActive ? "rotate-180" : ""
                              }`}
                            />
                          )}
                        </div>
                      ) : (
                        // Regular nav item with link
                        <Link
                          href={item.path}
                          className={`text-sm lg:text-lg font-semibold transition-all duration-300 relative py-2 px-1 whitespace-nowrap flex items-center ${
                            isActive
                              ? "text-transparent bg-gradient-to-r from-[#2058FF] to-[#004BC2] bg-clip-text "
                              : "text-gray-700 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#2058FF] group-hover:to-[#004BC2] group-hover:bg-clip-text"
                          }`}
                        >
                          {item.name}
                          {hasDropdown && (
                            <ChevronDown
                              size={16}
                              className={`ml-1 transition-transform duration-200 ${
                                isDropdownActive ? "rotate-180" : ""
                              }`}
                            />
                          )}
                        </Link>
                      )}

                      {/* Dropdown Menu */}
                      {hasDropdown && isDropdownActive && (
                        <div
                          className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 py-4 z-[60]"
                          onMouseEnter={() => setActiveDropdown(item.name)}
                          onMouseLeave={handleMouseLeave}
                        >
                          <div className="grid gap-2 px-4">
                            {item.data?.map((subItem) => {
                              const hasChildren =
                                subItem.children && subItem.children.length > 0;
                              const isSubmenuActive =
                                activeSubmenu === subItem.name;

                              return (
                                <div
                                  key={subItem.name}
                                  className="group/item relative"
                                  onMouseEnter={() =>
                                    hasChildren &&
                                    handleSubmenuEnter(subItem.name)
                                  }
                                  onMouseLeave={handleSubmenuLeave}
                                >
                                  {hasChildren ? (
                                    <Link
                                      href={subItem.path}
                                      className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors group/link"
                                      onClick={() => setActiveDropdown(null)}
                                    >
                                      {subItem.icon && (
                                        <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center mr-3 group-hover/link:bg-blue-100 transition-colors">
                                          <Image
                                            src={subItem.icon}
                                            alt={`${subItem.name} icon`}
                                            width={30}
                                            height={30}
                                          />
                                        </div>
                                      )}
                                      <div className="flex-1">
                                        <h4 className="font-semibold text-gray-900 text-sm group-hover/link:text-blue-600 transition-colors">
                                          {subItem.name}
                                        </h4>
                                      </div>
                                      <ChevronRight
                                        size={20}
                                        className="text-gray-400"
                                      />
                                    </Link>
                                  ) : (
                                    <Link
                                      href={subItem.path}
                                      className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors group/link"
                                      onClick={() => setActiveDropdown(null)}
                                    >
                                      {subItem.icon && (
                                        <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center mr-3 group-hover/link:bg-blue-100 transition-colors">
                                          <Image
                                            src={subItem.icon}
                                            alt={`${subItem.name} icon`}
                                            width={30}
                                            height={30}
                                          />
                                        </div>
                                      )}
                                      <div className="flex-1">
                                        <h4 className="font-semibold text-gray-900 text-sm group-hover/link:text-blue-600 transition-colors">
                                          {subItem.name}
                                        </h4>
                                      </div>
                                    </Link>
                                  )}

                                  {/* Grandchild Menu (appears to the right) */}
                                  {hasChildren && isSubmenuActive && (
                                    <div
                                      className="absolute top-0 left-full ml-1 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 py-4 z-[70]"
                                      onMouseEnter={() =>
                                        setActiveSubmenu(subItem.name)
                                      }
                                      onMouseLeave={handleSubmenuLeave}
                                    >
                                      <div className="grid gap-2 px-4">
                                        {subItem.children?.map((grandchild) => (
                                          <Link
                                            key={grandchild.name}
                                            href={grandchild.path}
                                            className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors group/grandlink"
                                            onClick={() => {
                                              setActiveDropdown(null);
                                              setActiveSubmenu(null);
                                            }}
                                          >
                                            <div className="flex-1">
                                              <h4 className="font-semibold text-gray-900 text-sm group-hover/grandlink:text-blue-600 transition-colors">
                                                {grandchild.name}
                                              </h4>
                                            </div>
                                          </Link>
                                        ))}
                                      </div>
                                    </div>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}
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

      {/* Mobile Sidebar */}
      <MobileSidebar isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </div>
  );
};

export default Header;

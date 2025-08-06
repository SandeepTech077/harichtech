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
  const pathname = usePathname();
  
  const handleSubmenuEnter = (subItemName: string) => {
    setActiveSubmenu(subItemName);
  };

  const handleSubmenuLeave = () => {
    setActiveSubmenu(null);
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

  const handleMouseEnter = (itemName: string) => {
    setActiveDropdown(itemName);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
    setActiveSubmenu(null);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.dropdown-container')) {
        setActiveDropdown(null);
        setActiveSubmenu(null);
      }
    };

    if (activeDropdown) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
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
            : "sm:top-12 top-0 bg-white/95 backdrop-blur-md shadow-lg"
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
                      onMouseEnter={() => hasDropdown && handleMouseEnter(item.name)}
                      onMouseLeave={handleMouseLeave}
                    >
                      {isIndustries ? (
                        // Industries - no link, just hover
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
                              ? "text-transparent bg-gradient-to-r from-[#2058FF] to-[#004BC2] bg-clip-text after:absolute after:bottom-0 after:left-1/2 after:transform after:-translate-x-1/2 after:w-1.5 after:h-1.5 after:bg-gradient-to-r after:from-[#2058FF] after:to-[#004BC2] after:rounded-full"
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

                      {/* Enhanced Dropdown Menu */}
                      {hasDropdown && isDropdownActive && (
                        <div 
                          className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-3 bg-white rounded-2xl shadow-2xl border border-gray-100 z-[60] animate-in slide-in-from-top-2 duration-200 ${
                            item.name === "Services" ? "w-96" : "w-80"
                          }`}
                          onMouseEnter={() => setActiveDropdown(item.name)}
                          onMouseLeave={handleMouseLeave}
                        >
                          {/* Dropdown Arrow */}
                          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-gray-100 rotate-45"></div>
                          
                          {/* Dropdown Header */}
                          <div className="px-6 py-4 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-t-2xl">
                            <h3 className="text-lg font-bold text-gray-900 mb-1">{item.name}</h3>
                            <p className="text-sm text-gray-600">
                              {item.name === "Services" 
                                ? "Comprehensive solutions for your business needs" 
                                : "Industries we serve with expertise"
                              }
                            </p>
                          </div>

                          {/* Dropdown Content */}
                          <div className="py-2 max-h-96 overflow-y-auto">
                            {item.data?.map((subItem, index) => {
                              const hasChildren = subItem.children && subItem.children.length > 0;
                              const isSubmenuActive = activeSubmenu === subItem.name;

                              return (
                                <div 
                                  key={subItem.name} 
                                  className="group/item relative"
                                  onMouseEnter={() => hasChildren && handleSubmenuEnter(subItem.name)}
                                  onMouseLeave={() => !hasChildren && handleSubmenuLeave()}
                                >
                                  {hasChildren ? (
                                    // Item with children - no link, just hover
                                    <div className="mx-2 my-1">
                                      <div className="flex items-center p-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-200 cursor-default group-hover/item:shadow-sm">
                                        {subItem.icon && (
                                          <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mr-4 group-hover/item:shadow-md transition-shadow duration-200 border border-gray-100">
                                            <Image
                                              src={subItem.icon}
                                              alt={`${subItem.name} icon`}
                                              width={24}
                                              height={24}
                                            />
                                          </div>
                                        )}
                                        <div className="flex-1 min-w-0">
                                          <h4 className="font-semibold text-gray-900 text-base mb-1 group-hover/item:text-blue-700 transition-colors">
                                            {subItem.name}
                                          </h4>
                                          <p className="text-sm text-gray-500 leading-relaxed">
                                            {subItem.children.length} specialized services
                                          </p>
                                        </div>
                                        <ChevronRight 
                                          size={18} 
                                          className="text-gray-400 group-hover/item:text-blue-500 transition-colors ml-2" 
                                        />
                                      </div>
                                    </div>
                                  ) : (
                                    // Regular subitem with link
                                    <div className="mx-2 my-1">
                                      <Link
                                        href={subItem.path}
                                        className="flex items-center p-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-200 group/link hover:shadow-sm"
                                        onClick={() => {
                                          setActiveDropdown(null);
                                          setActiveSubmenu(null);
                                        }}
                                      >
                                        {subItem.icon && (
                                          <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mr-4 group-hover/link:shadow-md transition-shadow duration-200 border border-gray-100">
                                            <Image
                                              src={subItem.icon}
                                              alt={`${subItem.name} icon`}
                                              width={24}
                                              height={24}
                                            />
                                          </div>
                                        )}
                                        <div className="flex-1 min-w-0">
                                          <h4 className="font-semibold text-gray-900 text-base group-hover/link:text-blue-700 transition-colors">
                                            {subItem.name}
                                          </h4>
                                        </div>
                                      </Link>
                                    </div>
                                  )}

                                  {/* Enhanced Grandchild Menu (appears to the right) */}
                                  {hasChildren && isSubmenuActive && (
                                    <div 
                                      className="absolute top-0 left-full ml-2 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 z-[70] animate-in slide-in-from-left-2 duration-200"
                                      onMouseEnter={() => setActiveSubmenu(subItem.name)}
                                      onMouseLeave={handleSubmenuLeave}
                                    >
                                      {/* Submenu Header */}
                                      <div className="px-6 py-4 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-t-2xl">
                                        <h4 className="text-base font-bold text-gray-900 mb-1">{subItem.name}</h4>
                                        <p className="text-sm text-gray-600">
                                          Choose your specialized service
                                        </p>
                                      </div>

                                      {/* Submenu Content */}
                                      <div className="py-2 max-h-80 overflow-y-auto">
                                        {subItem.children?.map((grandchild, childIndex) => (
                                          <div key={grandchild.name} className="mx-2 my-1">
                                            <Link
                                              href={grandchild.path}
                                              className="flex items-center p-3 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-200 group/grandlink hover:shadow-sm"
                                              onClick={() => {
                                                setActiveDropdown(null);
                                                setActiveSubmenu(null);
                                              }}
                                            >
                                              <div className="flex-1 min-w-0">
                                                <h5 className="font-medium text-gray-900 text-sm group-hover/grandlink:text-blue-700 transition-colors leading-relaxed">
                                                  {grandchild.name}
                                                </h5>
                                              </div>
                                              <div className="w-2 h-2 bg-blue-200 rounded-full group-hover/grandlink:bg-blue-500 transition-colors ml-3 flex-shrink-0"></div>
                                            </Link>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  )}
                                </div>
                              );
                            })}
                          </div>

                          {/* Dropdown Footer */}
                          <div className="px-6 py-4 border-t border-gray-100 bg-gray-50 rounded-b-2xl">
                            <Link
                              href={item.path}
                              className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors group/footer"
                              onClick={() => {
                                setActiveDropdown(null);
                                setActiveSubmenu(null);
                              }}
                            >
                              View all {item.name.toLowerCase()}
                              <ChevronRight size={16} className="ml-1 group-hover/footer:translate-x-1 transition-transform" />
                            </Link>
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
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { X, ChevronDown, ChevronRight } from "lucide-react";
import { navItems, socialLinks } from "./navLinks";
import MobilePhoneIcon from "../../../public/SVG/mobile-phone.svg";
import MobileEMailIcon from "../../../public/SVG/mobile-email.svg";
import Logo from "../../../public/Logo/Logo.svg";
import linkedinIcon from "../../../public/SVG/linkedin-logo.svg";
import facebookIcon from "../../../public/SVG/facebook-logo.svg";
import instagramIcon from "../../../public/SVG/instagram-logo.svg";

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileSidebar: React.FC<MobileSidebarProps> = ({ isOpen, onClose }) => {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const pathname = usePathname();

  const toggleExpanded = (itemName: string) => {
    setExpandedItems(prev => 
      prev.includes(itemName) 
        ? prev.filter(name => name !== itemName)
        : [...prev, itemName]
    );
  };

  const isExpanded = (itemName: string) => expandedItems.includes(itemName);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 z-45 lg:hidden backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-full max-w-[280px] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden overflow-hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
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
              onClick={onClose}
              aria-label="Close menu"
            >
              <X size={18} />
            </button>
          </div>

          {/* Contact Info */}
          <div className="mx-4 mt-4 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100 flex-shrink-0">
            <div className="flex flex-col space-y-2">
              <Link
                href="tel:+918200665684"
                className="flex items-center space-x-3 text-blue-600 hover:text-blue-700 transition-colors group min-w-0"
                onClick={onClose}
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
                  +91 8200 66 5684
                </span>
              </Link>
              <Link
                href="mailto:info@harichtech.com"
                className="flex items-center space-x-3 text-blue-600 hover:text-blue-700 transition-colors group min-w-0"
                onClick={onClose}
              >
                <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors flex-shrink-0">
                  <Image
                    src={MobileEMailIcon}
                    alt="Email Icon"
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

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto px-4 mt-4 pb-4">
            <ul className="space-y-1">
              {navItems.map((item) => {
                const isActive = pathname === item.path;
                const hasDropdown = item.hasDropdown && item.data;
                const expanded = isExpanded(item.name);

                return (
                  <li key={item.name}>
                    {hasDropdown ? (
                      <>
                        {/* Dropdown Header */}
                        <button
                          onClick={() => toggleExpanded(item.name)}
                          className={`w-full flex items-center justify-between py-3 px-4 rounded-xl text-sm font-medium transition-all duration-300 touch-manipulation ${
                            isActive
                              ? "text-blue-600 font-semibold bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200"
                              : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                          }`}
                        >
                          <span>{item.name}</span>
                          {expanded ? (
                            <ChevronDown size={16} />
                          ) : (
                            <ChevronRight size={16} />
                          )}
                        </button>

                        {/* Dropdown Content */}
                        {expanded && (
                          <div className="ml-4 mt-1 space-y-1">
                            {/* Main Category Link */}
                            <Link
                              href={item.path}
                              className="block py-2 px-3 text-xs font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors"
                              onClick={onClose}
                            >
                              {item.name}
                            </Link>

                            {/* Subcategories */}
                            {item.data?.map((subItem) => (
                              <div key={subItem.name} className="space-y-1">
                                <Link
                                  href={subItem.path}
                                  className="flex items-center py-2 px-3 text-xs font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors group"
                                  onClick={onClose}
                                >
                                  {subItem.icon && (
                                    <div className="flex-shrink-0 w-5 h-5 mr-2 flex items-center justify-center">
                                      <Image
                                        src={subItem.icon}
                                        alt={`${subItem.name} icon`}
                                        width={14}
                                        height={14}
                                        className="text-blue-600"
                                      />
                                    </div>
                                  )}
                                  <span>{subItem.name}</span>
                                </Link>

                                {/* Children */}
                                {subItem.children && (
                                  <div className="ml-6 space-y-1">
                                    {subItem.children.map((child) => (
                                      <Link
                                        key={child.name}
                                        href={child.path}
                                        className="block py-1.5 px-2 text-xs text-gray-500 hover:text-blue-600 hover:bg-gray-50 rounded transition-colors"
                                        onClick={onClose}
                                      >
                                        {child.name}
                                      </Link>
                                    ))}
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        href={item.path}
                        className={`block py-3 px-4 rounded-xl text-sm font-medium transition-all duration-300 touch-manipulation ${
                          isActive
                            ? "text-blue-600 font-semibold bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200"
                            : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                        }`}
                        onClick={onClose}
                      >
                        {item.name}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-gray-100 bg-gray-50 flex-shrink-0">
            <Link
              href="/contact-us"
              className="flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r from-[#2058FF] to-[#004BC2] text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 mb-4 group touch-manipulation"
              onClick={onClose}
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
                  className="w-9 h-9 border border-gray-300 text-white rounded-lg flex items-center justify-center"
                  aria-label="Facebook"
                >
                  <div className="w-6 h-6 relative">
                    <Image src={facebookIcon} alt="Facebook" fill />
                  </div>
                </Link>
                <Link
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 border border-gray-300 text-white rounded-lg flex items-center justify-center"
                  aria-label="Instagram"
                >
                  <div className="w-6 h-6 relative">
                    <Image src={instagramIcon} alt="Instagram" fill />
                  </div>
                </Link>
                <Link
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 border border-gray-300 text-white rounded-lg flex items-center justify-center"
                  aria-label="LinkedIn"
                >
                  <div className="w-6 h-6 relative">
                    <Image
                      src={linkedinIcon}
                      alt="LinkedIn"
                      fill
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileSidebar;
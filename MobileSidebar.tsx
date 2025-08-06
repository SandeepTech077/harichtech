"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { X, ChevronDown, ChevronRight, Plus, Minus } from "lucide-react";
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
  const [expandedSubItems, setExpandedSubItems] = useState<string[]>([]);
  const pathname = usePathname();

  const toggleExpanded = (itemName: string) => {
    setExpandedItems(prev => 
      prev.includes(itemName) 
        ? prev.filter(name => name !== itemName)
        : [...prev, itemName]
    );
  };

  const toggleSubExpanded = (subItemName: string) => {
    setExpandedSubItems(prev => 
      prev.includes(subItemName) 
        ? prev.filter(name => name !== subItemName)
        : [...prev, subItemName]
    );
  };

  const isExpanded = (itemName: string) => expandedItems.includes(itemName);
  const isSubExpanded = (subItemName: string) => expandedSubItems.includes(subItemName);

  if (!isOpen) return null;

  return (
    <>
      {/* Enhanced Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 z-45 lg:hidden backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Enhanced Sidebar */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-full max-w-[320px] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-out lg:hidden overflow-hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full w-full overflow-hidden">
          {/* Enhanced Mobile Header */}
          <div className="flex justify-between items-center p-6 border-b border-gray-100 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex-shrink-0">
            <Image
              src={Logo}
              alt="Harich Technologies"
              className="h-12 w-auto max-w-[160px]"
            />
            <button
              className="p-2 text-gray-600 hover:text-blue-600 hover:bg-white hover:shadow-md rounded-xl transition-all duration-300 touch-manipulation flex-shrink-0"
              onClick={onClose}
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          {/* Enhanced Contact Info */}
          <div className="mx-4 mt-6 p-4 bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 rounded-2xl border border-blue-200 flex-shrink-0 shadow-sm">
            <h4 className="text-sm font-bold text-gray-800 mb-3">Get in Touch</h4>
            <div className="flex flex-col space-y-3">
              <Link
                href="tel:+918200665684"
                className="flex items-center space-x-3 text-blue-700 hover:text-blue-800 transition-colors group min-w-0"
                onClick={onClose}
              >
                <div className="p-2.5 bg-white rounded-xl group-hover:bg-blue-50 group-hover:shadow-md transition-all duration-200 flex-shrink-0 border border-blue-100">
                  <Image
                    src={MobilePhoneIcon}
                    alt="Phone Icon"
                    width={18}
                    height={18}
                  />
                </div>
                <span className="font-semibold text-sm truncate">
                  +91 8200 66 5684
                </span>
              </Link>
              <Link
                href="mailto:info@harichtech.com"
                className="flex items-center space-x-3 text-blue-700 hover:text-blue-800 transition-colors group min-w-0"
                onClick={onClose}
              >
                <div className="p-2.5 bg-white rounded-xl group-hover:bg-blue-50 group-hover:shadow-md transition-all duration-200 flex-shrink-0 border border-blue-100">
                  <Image
                    src={MobileEMailIcon}
                    alt="Email Icon"
                    width={18}
                    height={18}
                  />
                </div>
                <span className="font-semibold text-sm truncate">
                  info@harichtech.com
                </span>
              </Link>
            </div>
          </div>

          {/* Enhanced Navigation */}
          <nav className="flex-1 overflow-y-auto px-4 mt-6 pb-6">
            <ul className="space-y-2">
              {navItems.map((item) => {
                const isActive = pathname === item.path;
                const hasDropdown = item.hasDropdown && item.data;
                const expanded = isExpanded(item.name);

                return (
                  <li key={item.name}>
                    {hasDropdown ? (
                      <>
                        {/* Enhanced Dropdown Header */}
                        <button
                          onClick={() => toggleExpanded(item.name)}
                          className={`w-full flex items-center justify-between py-4 px-5 rounded-2xl text-base font-semibold transition-all duration-300 touch-manipulation group ${
                            isActive
                              ? "text-blue-700 bg-gradient-to-r from-blue-50 to-indigo-100 border border-blue-200 shadow-sm"
                              : "text-gray-800 hover:text-blue-700 hover:bg-gradient-to-r hover:from-gray-50 hover:to-blue-50 hover:shadow-sm"
                          }`}
                        >
                          <span className="flex items-center">
                            {item.name}
                          </span>
                          <div className={`p-1 rounded-lg transition-all duration-200 ${expanded ? 'bg-blue-100 rotate-180' : 'group-hover:bg-gray-100'}`}>
                            {expanded ? (
                              <Minus size={16} className="text-blue-600" />
                            ) : (
                              <Plus size={16} className="text-gray-600 group-hover:text-blue-600" />
                            )}
                          </div>
                        </button>

                        {/* Enhanced Dropdown Content */}
                        {expanded && (
                          <div className="ml-2 mt-2 space-y-2 animate-in slide-in-from-top-2 duration-300">
                            {/* Main Category Link */}
                            <Link
                              href={item.path}
                              className="block py-3 px-4 text-sm font-semibold text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-xl transition-all duration-200 border border-blue-100"
                              onClick={onClose}
                            >
                              View All {item.name}
                            </Link>
                            
                            {/* Enhanced Subcategories */}
                            {item.data?.map((subItem) => (
                              <div key={subItem.name} className="space-y-1">
                                {subItem.children && subItem.children.length > 0 ? (
                                  // Subcategory with children
                                  <>
                                    <button
                                      onClick={() => toggleSubExpanded(subItem.name)}
                                      className="w-full flex items-center justify-between py-3 px-4 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-xl transition-all duration-200 group/sub"
                                    >
                                      <div className="flex items-center">
                                        {subItem.icon && (
                                          <div className="flex-shrink-0 w-6 h-6 mr-3 flex items-center justify-center bg-white rounded-lg border border-gray-200 group-hover/sub:border-blue-200 transition-colors">
                                            <Image
                                              src={subItem.icon}
                                              alt={`${subItem.name} icon`}
                                              width={14}
                                              height={14}
                                            />
                                          </div>
                                        )}
                                        <span>{subItem.name}</span>
                                      </div>
                                      <div className={`p-1 rounded-md transition-all duration-200 ${isSubExpanded(subItem.name) ? 'bg-blue-100 rotate-180' : 'group-hover/sub:bg-gray-100'}`}>
                                        <ChevronDown size={14} className={isSubExpanded(subItem.name) ? 'text-blue-600' : 'text-gray-500 group-hover/sub:text-blue-600'} />
                                      </div>
                                    </button>
                                    
                                    {/* Children */}
                                    {isSubExpanded(subItem.name) && (
                                      <div className="ml-6 space-y-1 animate-in slide-in-from-top-2 duration-200">
                                        {subItem.children.map((child) => (
                                          <Link
                                            key={child.name}
                                            href={child.path}
                                            className="flex items-center py-2.5 px-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 group/child"
                                            onClick={onClose}
                                          >
                                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3 group-hover/child:bg-blue-500 transition-colors flex-shrink-0"></div>
                                            <span>{child.name}</span>
                                          </Link>
                                        ))}
                                      </div>
                                    )}
                                  </>
                                ) : (
                                  // Regular subcategory link
                                  <Link
                                    href={subItem.path}
                                    className="flex items-center py-3 px-4 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-xl transition-all duration-200 group/link"
                                    onClick={onClose}
                                  >
                                    {subItem.icon && (
                                      <div className="flex-shrink-0 w-6 h-6 mr-3 flex items-center justify-center bg-white rounded-lg border border-gray-200 group-hover/link:border-blue-200 transition-colors">
                                        <Image
                                          src={subItem.icon}
                                          alt={`${subItem.name} icon`}
                                          width={14}
                                          height={14}
                                        />
                                      </div>
                                    )}
                                    <span>{subItem.name}</span>
                                  </Link>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        href={item.path}
                        className={`block py-4 px-5 rounded-2xl text-base font-semibold transition-all duration-300 touch-manipulation ${
                          isActive
                            ? "text-blue-700 bg-gradient-to-r from-blue-50 to-indigo-100 border border-blue-200 shadow-sm"
                            : "text-gray-800 hover:text-blue-700 hover:bg-gradient-to-r hover:from-gray-50 hover:to-blue-50 hover:shadow-sm"
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

          {/* Enhanced Footer */}
          <div className="p-6 border-t border-gray-100 bg-gradient-to-br from-gray-50 to-blue-50 flex-shrink-0">
            <Link
              href="/contact-us"
              className="flex items-center justify-center w-full px-6 py-4 bg-gradient-to-r from-[#2058FF] to-[#004BC2] text-white font-bold rounded-2xl hover:shadow-xl hover:scale-[1.02] transition-all duration-300 mb-6 group touch-manipulation"
              onClick={onClose}
            >
              <span className="truncate">Get in Touch</span>
              <span className="ml-2 text-lg group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0">
                ↗
              </span>
            </Link>

            <div className="flex flex-col items-center justify-center space-y-4">
              <span className="text-sm font-bold text-gray-700 text-center">
                Follow Us
              </span>
              <div className="flex justify-center space-x-4">
                <Link
                  href={socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 bg-white border-2 border-gray-200 hover:border-blue-300 text-white rounded-xl flex items-center justify-center hover:shadow-lg hover:scale-110 transition-all duration-300"
                  aria-label="Facebook"
                >
                  <Image
                    src={facebookIcon}
                    alt="Facebook"
                    width={10}
                    height={10}
                  />
                </Link>
                <Link
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 bg-white border-2 border-gray-200 hover:border-pink-300 text-white rounded-xl flex items-center justify-center hover:shadow-lg hover:scale-110 transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Image
                    src={instagramIcon}
                    alt="Instagram"
                    width={16}
                    height={16}
                  />
                </Link>
                <Link
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 bg-white border-2 border-gray-200 hover:border-blue-500 text-white rounded-xl flex items-center justify-center hover:shadow-lg hover:scale-110 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Image
                    src={linkedinIcon}
                    alt="LinkedIn"
                    width={16}
                    height={16}
                  />
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
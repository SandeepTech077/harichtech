// components/Footer.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';
import Logo from "../../../public/Logo/Logo.svg"

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [, setWindowWidth] = useState<number>(0);
  
  // Track window width for responsive design
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    // Set initial width
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Our work', path: '/our-work' },
    { name: 'About us', path: '/about-us' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'Career', path: '/career' },
  ];

  const socialLinks = [
    { icon: <Facebook size={18} />, path: 'https://facebook.com/harichtech', name: 'Facebook' },
    { icon: <Twitter size={18} />, path: 'https://twitter.com/harichtech', name: 'Twitter' },
    { icon: <Linkedin size={18} />, path: 'https://linkedin.com/company/harichtech', name: 'LinkedIn' },
    { icon: <Instagram size={18} />, path: 'https://instagram.com/harichtech', name: 'Instagram' },
  ];
  
  return (
    <footer className="bg-white relative overflow-hidden h-auto w-full">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-24 h-24 md:w-36 md:h-36 bg-blue-50 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 md:w-48 md:h-48 bg-blue-50 rounded-full translate-x-1/4 translate-y-1/4 opacity-50"></div>
      
      <div className="container mx-auto px-4 sm:px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Logo and Company Info */}
          <div className="space-y-4 sm:space-y-6">
          <Image 
  src={Logo}
  alt="Harich Technologies" 
  width={140} 
  height={40}
/>

            <p className="text-gray-600 text-sm max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="font-medium text-base md:text-lg">Quick Links</h3>
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-y-3 gap-x-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.path} className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="font-medium text-base md:text-lg">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="text-gray-600 mt-1 flex-shrink-0" size={18} />
                <p className="text-gray-600 text-sm">
                  Shilp 3, 3rd Floor, Sindhu Bhavan Road, Shilp Circle, Above Bajarang Grocery, Bodakdev, Ahmedabad, Gujarat 380054
                </p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="text-gray-600 flex-shrink-0" size={18} />
                <a href="tel:+918200665684" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                  +91-8200 66 5684
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="text-gray-600 flex-shrink-0" size={18} />
                <a href="mailto:info@harichtech.com" className="text-gray-600 hover:text-blue-600 transition-colors text-sm break-all">
                  info@harichtech.com
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Divider line */}
        <div className="w-full h-px bg-gray-200 my-8"></div>
        
        {/* Social Media and Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm text-center md:text-left order-2 md:order-1">
            Copyright {currentYear} Harichtech | All Rights Reserved
          </p>
          
          <div className="flex items-center gap-6 order-1 md:order-2">
            <h3 className="font-medium text-sm hidden md:block">Social media</h3>
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
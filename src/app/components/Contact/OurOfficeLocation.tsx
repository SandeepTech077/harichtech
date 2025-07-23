"use client";

import React from 'react';
import Image from 'next/image';

interface OurOfficeLocationProps {
  data: {
    title: string;
    mapLink: string;
    detail: {
      icon: string;
      title: string;
      address: string;
    };
  };
}

export default function OurOfficeLocation({ data }: OurOfficeLocationProps) {
  // Default map link if not provided in data
  const mapLink = data.mapLink || "https://www.google.com/maps/place/Harich+Tech/@23.0408831,72.5022936,801m/data=!3m3!1e3!4b1!5s0x395e9b4458a6c34b:0x4a051f13b574b726!4m6!3m5!1s0x3959cb9ef6bd40eb:0x43ebf40375e2a4b2!8m2!3d23.0408831!4d72.5048685!16s%2Fg%2F11sy1h_542?entry=ttu&g_ep=EgoyMDI1MDYxMS4wIKXMDSoASAFQAw%3D%3D";

  return (
    <section className=" px-4 sm:px-6 lg:px-16 bg-gray-50 py-12">
      <div className=" mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-l from-[#2058FF] to-[#004BC2] bg-clip-text text-transparent">Office</span>
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Side - Map */}
          <div className="space-y-4">
            <div className="relative h-80 lg:h-96 w-full rounded-2xl overflow-hidden shadow-lg group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.2654234567!2d72.5022936!3d23.0408831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959cb9ef6bd40eb%3A0x43ebf40375e2a4b2!2sHarich%20Tech!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              
              {/* Map Overlay for Click */}
              <div className="absolute inset-0 bg-transparent hover:bg-black/5 transition-all duration-300 cursor-pointer">
                <a
                  href={mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
                >
                  <div className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg font-medium">
                    View in Google Maps
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Office Details */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              {/* Country Flag and Title */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-8 rounded overflow-hidden shadow-sm">
                  <Image
                    src={data.detail.icon}
                    alt={`${data.detail.title} flag`}
                    width={48}
                    height={32}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {data.detail.title}
                </h3>
              </div>

              {/* Address */}
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700 leading-relaxed">
                      {data.detail.address}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 space-y-3">
                <a
                  href={mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Get Directions
                </a>
                
                <button
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: 'Our Office Location',
                        text: data.detail.address,
                        url: mapLink,
                      });
                    } else {
                      navigator.clipboard.writeText(`${data.detail.address}\n${mapLink}`);
                    }
                  }}
                  className="inline-flex items-center justify-center w-full px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-colors duration-200"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                  </svg>
                  Share Location
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
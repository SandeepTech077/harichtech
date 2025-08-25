'use client';

import React from 'react';
import Image from 'next/image';

interface ContactInfoItem {
  icon: string;
  title: string;
  detail: string;
}

interface ContactInfoProps {
  data: {
    title: string;
    subTitle: string;
    info: ContactInfoItem[];
  };
}

const ContactInfo = ({ data }: ContactInfoProps) => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div
        className="max-w-7xl mx-auto rounded-3xl  p-6 lg:p-12"
        style={{
          background: 'linear-gradient(270deg, #2058FF 0%, #004BC2 100%)',
        }}
      >
        <div className="flex flex-col md:flex-row gap-10">
          {/* Left Side: Title and Subtitle */}
          <div className="w-full md:w-1/3">
            <div className="inline-block bg-white rounded-[10px] px-6 py-2 mb-4">
              <span className="text-black font-medium-blod text-[16px] lg:text-[20px]">
                {data.title}
              </span>
            </div>
            <h2 className="text-3xl lg:text-[48px] font-bold text-white leading-tight">
              {data.subTitle}
            </h2>
          </div>

          {/* Right Side: Contact Cards */}
          <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {data.info.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6  transform hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={24}
                      height={24}
                      className="w-6 h-6"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-[16px] lg:text-[20px] font-bold text-black uppercase tracking-wider">
                    {item.title}
                  </h3>

                  {/* Detail */}
                  <div className="text-[14px] lg:text-[16px] font-semibold text-gray-900">
                    {item.title === 'CALL US' ? (
                      <a
                        href={`tel:${item.detail.replace(/\s+/g, '')}`}
                        className="hover:text-blue-600 transition-colors duration-200"
                      >
                        {item.detail}
                      </a>
                    ) : item.title === 'EMAIL' ? (
                      <a
                        href={`mailto:${item.detail}`}
                        className="hover:text-blue-600 transition-colors duration-200 break-all"
                      >
                        {item.detail}
                      </a>
                    ) : (
                      <span>{item.detail}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;

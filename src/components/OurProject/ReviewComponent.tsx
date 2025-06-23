
import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface ReviewData {
  Textcolor: string;
  Bordercolor: string;
  backgroundColor: string;
  icon?: StaticImageData | string;
  connectIcon?: StaticImageData | string;
  happyClintIcon?: StaticImageData | string;
  profileImage?: StaticImageData | string;
  describation: string;
}

interface ReviewComponentProps {
  data: ReviewData;
}

const ReviewComponent: React.FC<ReviewComponentProps> = ({ data }) => {
  return (
    <div className="px-4 lg:px-20 py-16 bg-gray-50 relative">
      {/* Connect Icon - Left Side (Outside main container) */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 flex flex-col items-center gap-2">
        <div className="w-22 h-22 flex items-center justify-center relative">
          {data.connectIcon && (
            <Image
              src={data.connectIcon}
              alt="Connect"
              width={88}
              height={88}
              className="object-cover"
              priority
            />
          )}
        </div>
      </div>

      {/* Happy Client Icon - Right Side (Outside main container) */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex flex-col items-center gap-2">
        <div className="w-22 h-22 flex items-center justify-center relative">
          {data.happyClintIcon && (
            <Image
              src={data.happyClintIcon}
              alt="Happy Client"
              width={88}
              height={88}
              className="object-cover"
              priority
            />
          )}
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Main Review Section */}
        <div className={`${data.backgroundColor} rounded-3xl p-8 lg:p-16 relative overflow-hidden shadow-lg`}>
          
          {/* Profile Image - Center */}
          <div className="flex justify-center mb-8">
            <div className={`w-22 h-22 rounded-full ${data.Bordercolor} border-4 bg-white flex items-center justify-center shadow-md overflow-hidden`}>
              {data.profileImage ? (
                <Image 
                  src={data.profileImage} 
                  alt="Client Profile" 
                  width={80}
                  height={80}
                  className="rounded-full object-cover"
                  priority
                />
              ) : (
                <div className="w-full h-full bg-gray-400 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>
          </div>

          {/* Quote Icon */}
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
            </div>
          </div>

          {/* Review Text */}
          <div className="text-center max-w-4xl mx-auto mb-8">
            <p className={`${data.Textcolor} text-lg lg:text-xl leading-relaxed font-medium tracking-wide`}>
              {data.describation}
            </p>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-1/2 left-4 w-2 h-16 bg-red-200 rounded-full opacity-30 transform -translate-y-1/2"></div>
          <div className="absolute top-1/3 right-4 w-2 h-12 bg-red-200 rounded-full opacity-30"></div>
        </div>

  
      </div>
    </div>
  );
};



export default ReviewComponent

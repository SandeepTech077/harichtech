import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Title from "@/components/Title"
interface WhyUsListItem {
  id: number;
  describation: string;
  LineImage: StaticImageData;
}

interface WhyUsProps {
  whyUsData: {
    title: string;
    subTitle: string;
    describation: string;
    list: WhyUsListItem[];
    rightImg: StaticImageData;
  };
}

const WhyChooseUs: React.FC<WhyUsProps> = ({ whyUsData }) => {
  return (
    <div className="py-6 mx-auto">
        <div className="mb-6">
            <div className="inline-block mb-3">
           <Title title={whyUsData.title} />
            </div>
            <h2 className="text-3xl font-bold mb-6">
              Why Choose <span className="text-blue-500">Harichtech?</span>
            </h2>
            <p className="text-gray-700 mb-10">
              {whyUsData.describation}
            </p>
          </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
        

          {/* List items */}
          <div className="space-y-12">
            {whyUsData.list.map((item) => (
              <div key={item.id} className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-medium">
                    {item.id < 10 ? `0${item.id}` : item.id}
                  </div>
                </div>
                <div className="flex flex-col ">
                  <p className="font-medium mb-1">{item.describation}</p>
                  <Image 
                    src={item.LineImage} 
                    alt="Dotted line"
                    width={350}
                    height={200}
                    className="mt-2"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column - Image */}
        <div className="flex items-center justify-center hidden lg:block">
          <div className="relative w-full h-[400px]">
            <Image 
              src={whyUsData.rightImg} 
              alt="Why choose us"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
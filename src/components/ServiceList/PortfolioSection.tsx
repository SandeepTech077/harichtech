import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Title from "@/components/Title"
import Button from '../Button';
interface PortfolioCardProps {
  id: number;
  Img: StaticImageData;
  shortDescribation: string;
  blog: string[];
}

interface PortfolioSectionProps {
  portfolioData: {
    title: string;
    subTitle: string;
    btnTitle: string;
    card: PortfolioCardProps[];
  };
}

const PortfolioSection: React.FC<PortfolioSectionProps> = ({ portfolioData }) => {
  return (
    <div className="  mx-auto">
      {/* Header section */}
      <div className="flex justify-between items-center mb-12">
        <div>
          <div className="inline-block bg-gray-100 px-4 py-2 rounded-md mb-3">
          <Title title={portfolioData.title} />
          </div>
          <h2 className="text-3xl font-bold">
            Discover Our <span className="text-blue-500">Digital<br />Masterpieces</span>
          </h2>
        </div>
        <div className='hidden lg:block'>
        <Button text={portfolioData.btnTitle}/>
        </div>
       
      </div>

      {/* Portfolio grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioData.card.map((item) => (
          <div key={item.id} className="flex flex-col">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-4">
              <Image 
                src={item.Img} 
                alt={item.shortDescribation}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-medium mb-3">{item.shortDescribation}</h3>
            <div className="flex gap-2">
              {item.blog.map((tag, index) => (
                <span 
                  key={index} 
                  className="bg-gray-100 px-4 py-2 rounded-md text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
           <div className='block lg:hidden text-center mt-4'>
        <Button text={portfolioData.btnTitle}/>
        </div>
      </div>
    </div>
  );    
};

export default PortfolioSection;
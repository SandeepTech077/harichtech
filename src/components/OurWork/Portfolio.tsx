'use client'
import React, { useState, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import Title from '../Title';

interface PortfolioImage {
  id: number;
  type: string;
  image: StaticImageData;
}

interface PortfolioProps {
  title: string;
  subTitle: string;
  images: PortfolioImage[];
}

const Portfolio: React.FC<PortfolioProps> = ({ title, subTitle, images }) => {
  const [filter, setFilter] = useState<string>('all');
  const [filteredImages, setFilteredImages] = useState<PortfolioImage[]>(images);
  
  const categories = ['all', 'uiux', 'mobile', 'web', 'digital'];
  
  useEffect(() => {
    if (filter === 'all') {
      setFilteredImages(images);
    } else {
      const filtered = images.filter(image => image.type === filter);
      setFilteredImages(filtered);
    }
  }, [filter, images]);
  
  return (
    <section>
      <div className="mt-20 text-left">
      <div className='w-40 my-10'>
        <Title title={title} />
      </div>
        <h1 className="text-3xl font-bold text-gray-900">
          {subTitle}
        </h1>
      </div>
      
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 my-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-6 py-2 rounded-[10px] transition-colors cursor-pointer ${
              filter === category 
                ? 'bg-blue-600 text-white ' 
                : 'bg-[#F1F1F1] text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
      
      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredImages.map((item) => (
          <div 
            key={item.id} 
            className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="relative h-64 w-full">
              <Image 
                src={item.image} 
                alt={`Portfolio item ${item.id}`}
                fill
                className="object-cover"
              />
            </div>
           
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
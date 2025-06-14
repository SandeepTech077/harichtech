import React from 'react';
import Title from "@/components/Title"
import Button from '../Button';
interface MainTitleProps {
  title: string;
  subTitle: string;
  description: string;
  btnTitle: string;
}

const MainTitle: React.FC<MainTitleProps> = ({ 
  title, 
  subTitle, 
  description, 
  btnTitle 
}) => {
  return (
    <section className="mt-20 ">
      <div className="">
     <div className='w-40 mb-10'>
      <Title title={title}/>
     </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {subTitle}
        </h1>
        <p className="text-black mb-8">
          {description}
        </p>
   <Button text={btnTitle}/>
      </div>
    </section>
  );
};

export default MainTitle;
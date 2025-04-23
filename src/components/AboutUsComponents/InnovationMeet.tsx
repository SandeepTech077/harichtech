import React from 'react';
import Image from 'next/image';
import Title from "@/components/Title"
import Button from '../Button';
interface InnovationMeetProps {
  innovationMeet: {
    title: string;
    leftSide: {
      title: string;
      describation: string[];
      btnTitle: string;
    };
    rightSide: {
      cards: {
        id: number;
        title: string;
        description: string;
        icon: string;
      }[];
    };
  };
}

const InnovationMeet: React.FC<InnovationMeetProps> = ({ innovationMeet }) => {
  const { title, leftSide, rightSide } = innovationMeet;

  return (
    <section className="w-full py-16 mx-auto">
      <div className="flex mb-10">
        <div className="">
         <Title title={title}/>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col">
          <h2 className="text-2xl lg:text-4xl font-bold mb-6">
            Where Innovation Meets{' '} <br/>
            <span className="text-blue-600">Satisfaction</span>
          </h2>

          <div className="space-y-6">
            {leftSide.describation.map((paragraph, index) => (
              <p key={index} className="text-gray-700">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-8 hidden lg:block">
           <Button text={leftSide.btnTitle} />
          </div>
        </div>

        {/* Right side cards */}
        <div className="space-y-6">
          {rightSide.cards.map((card) => (
            <div 
              key={card.id} 
              className="bg-white p-6 rounded-lg border border-gray-50"
              style={{ boxShadow: '0px 1px 4px 0px rgba(0, 0, 0, 0.25)' }}
            >
              <div className="flex items-start mb-3">
                <div className="mr-4">
                  {card.icon ? (
                    <Image src={card.icon} alt={card.title} width={28} height={28} />
                  ) : (
                    <svg className="w-7 h-7 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )}
                </div>
                <h3 className="text-xl font-semibold">{card.title}</h3>
              </div>
              <p className="text-gray-600 pl-11">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InnovationMeet;
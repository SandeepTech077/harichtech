import React from "react";
import Image from "next/image";
import Title from "@/components/Title";
import Button from "../Button";
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
    <section className="w-full py-4 mx-auto">
      <div className="flex mb-10"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col">
          <div className="w-52 mb-4">
            <Title title={title} />
          </div>
          <h2 className="text-2xl lg:text-4xl font-bold mb-6">
            Where Innovation Meets <br />
            <span className="bg-gradient-to-l from-[#2058FF] to-[#004BC2] bg-clip-text text-transparent  ">
              Satisfaction
            </span>
          </h2>

          <div className="space-y-6">
            {leftSide.describation.map((paragraph, index) => (
              <p key={index} className="text-gray-700">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-8 hidden lg:block">
          
              <Button text={leftSide.btnTitle} href="/career" />
            
          </div>
        </div>
        <div className="w-full max-w-md mx-auto mt-10 space-y-6">
          {rightSide.cards.map((card) => (
            <div key={card.id} className="relative">
              <div className=" bg-[#FBFBFB] border border-gray-300 rounded-md py-6">
                <div className="p-6 h-full flex flex-col justify-center">
                  <div className="flex items-start mb-3">
                    <div className="w-7 h-7 mr-4 ">
                      <Image
                        src={card.icon}
                        alt={card.title}
                        width={28}
                        height={28}
                      />
                    </div>
                    <h3 className="text-xl font-semibold">{card.title}</h3>
                  </div>
                  <p className="text-black   pl-11">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InnovationMeet;

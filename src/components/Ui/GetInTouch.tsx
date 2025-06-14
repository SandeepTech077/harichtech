import React from 'react';
import Button from '../Button';

interface GetInTouchProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
}

const GetInTouch: React.FC<GetInTouchProps> = ({
  title = "Get in touch with us",
  subtitle = "Connect with like-minded professionals",
  buttonText = "Connect with us",
}) => {
  return (
    <div className="w-full mx-auto p-6 sm:p-8 lg:p-10 border border-blue-200 rounded-3xl">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-black mb-2">
            {title}
          </h3>
          <p className="text-sm sm:text-base text-black leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="mt-4 lg:mt-0">
          <Button text={buttonText} />
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;

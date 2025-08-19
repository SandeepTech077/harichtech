import React, { useState } from "react";

interface FAQItemProps {
  title: string;
  descriptions: string[];
  defaultOpen?: boolean;
}

export const FAQItem: React.FC<FAQItemProps> = ({
  title,
  descriptions,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="bg-white rounded-lg shadow-md">
      <button
        className="w-full p-6 text-left hover:bg-gray-50 font-semibold text-gray-800 flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <span className="text-xl font-bold text-blue-600">
          {isOpen ? "−" : "+"}
        </span>
      </button>

      {isOpen && (
        <div className="px-6 pb-6 border-t border-gray-100">
          {descriptions.map((desc, index) => (
            <p key={index} className="text-gray-600 mt-4">
              {desc}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

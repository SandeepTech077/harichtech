import React from "react";

interface FAQItemProps {
  title: string;
  descriptions: string[];
  isOpen: boolean; // controlled open/close
  onToggle: () => void; // handler from parent
}

export const FAQItem: React.FC<FAQItemProps> = ({
  title,
  descriptions,
  isOpen,
  onToggle,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md">
      <button
        className="w-full p-6 text-left hover:bg-gray-50 font-semibold text-gray-800 flex justify-between items-center"
        onClick={onToggle}
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

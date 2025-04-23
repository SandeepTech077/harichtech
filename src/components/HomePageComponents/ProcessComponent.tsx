import React from 'react';
import Image from 'next/image';
import Title from "@/components/Title"

interface ProcessData {
  title: string;
  subtitle: string;
  steps: string[]; // Only image paths
}

interface ProcessComponentProps {
  data: ProcessData;
}

const ProcessComponent: React.FC<ProcessComponentProps> = ({ data }) => {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-block mb-4">
      <Title title={data.title}/>
        </div>
        <h2 className="text-3xl font-bold">
          <span className="text-blue-600">Process</span>{' '}
          {data.subtitle.replace('Process', '')}
        </h2>
      </div>

      {/* Steps */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {data.steps.map((imageSrc, index) => (
          <div
            key={index}
            className="bg-white rounded-lg transition duration-300 flex flex-col items-center text-center"
          >
            <div className="w-full h-88 mb-4 relative">
              <Image
                src={imageSrc}
                alt={`Step ${index + 1}`}
                fill
                className="object-contain rounded"
              />
            </div>
      
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessComponent;

import Image from "next/image";
import React from "react";
import Arrow from "../../../public/SVG/Arrow 4.svg";
import Title from "../Title";

interface ProcessStep {
  id: number;
  title: string;
  number: string;
}

interface ProcessData {
  title: string;
  subTitle: string;
  shortDescribation: string;
  steps: ProcessStep[];
}

interface ProcessComponentProps {
  processData: ProcessData;
}

const ProcessComponent: React.FC<ProcessComponentProps> = ({ processData }) => {
  const { title, subTitle, shortDescribation, steps } = processData;

  return (
    <div className="pt-10 mx-auto px-4">
      <div className="text-center mb-20">
        <div className="inline-block mb-4">
          <Title title={title} />
        </div>
        <h2 className="text-[24px] lg:text-[48px] font-bold mb-3">
          {subTitle.split(" ").slice(0, -1).join(" ")}{" "}
          <span className="text-blue-600">{subTitle.split(" ").pop()}</span>
        </h2>
        <p className="text-black text-[14px] lg:text-[18px]">
          {shortDescribation}
        </p>
      </div>

      <div className="relative flex flex-col md:flex-row justify-between items-center gap-14">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            {/* Step Card */}
            <div className="relative flex-1 z-10 w-full h-auto">
              <div className="bg-blue-600 text-white py-16 w-full rounded-lg text-center relative">
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-white border border-blue-200 shadow-md flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-lg">
                    {step.number}
                  </span>
                </div>
                <div className="mt-6">{step.title}</div>
              </div>
            </div>

            {/* Arrow Between Steps */}
            {index < steps.length - 1 && (
              <div
                className="hidden md:block absolute -top-16 z-0"
                style={{
                  left: `calc((100% / ${steps.length}) * ${index + 1} - 80px)`,
                }}
              >
              <div className="relative w-40 h-[60px]">
  <Image
    src={Arrow}
    alt="Arrow"
    fill
    className="object-contain"
    priority
  />
</div>

              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ProcessComponent;

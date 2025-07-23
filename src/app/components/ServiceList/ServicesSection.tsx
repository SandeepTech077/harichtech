import Title from "../Title";


interface ServicesSectionProps {
  servicesData: {
    title: string;
    subTitle: string;
    services: string[];
  };
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ servicesData }) => {
  return (
    <div className="py-8  mx-auto">
      {/* Header section */}
      <div className="mb-10">
        <div className="inline-block mb-8">
     <Title title={servicesData.title}/>
        </div>
        <h2 className="text-3xl font-bold">
          Our Core <span className="bg-gradient-to-l from-[#2058FF] to-[#004BC2] bg-clip-text text-transparent">Services</span>
        </h2>
      </div>

      {/* Services grid */}
      <div className="grid grid-cols-1x md:grid-cols-3 lg:grid-cols-4 gap-10">
        {servicesData.services.map((service, index) => (
          <div 
            key={index}
            className="border border-black rounded-lg p-6 flex items-center justify-center text-center h-24"
          >
            <p className="font-bold text-[16px] md:text-[20px]">{service}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
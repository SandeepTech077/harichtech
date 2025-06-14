import Image, { StaticImageData } from "next/image";

interface StatusItem {
  id: number;
  title: string;
  number: string; // This is your count (e.g., "45+")
  icon: StaticImageData; // The image for the icon
}

interface AboutStatusProps {
  status: StatusItem[];
}

const AboutStatus: React.FC<AboutStatusProps> = ({ status }) => {
  return (
    <section className="w-full bg-white">
      <div className=" mx-auto grid grid-cols-1  md:grid-cols-4 gap-8 text-center">
        {status.map((item) => (
          <div key={item.id} className="flex flex-col items-center space-y-3">
            <div className="w-full h-full flex items-center justify-center"> 
              <Image
                src={item.icon}
                alt={item.title}
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
            <h3 className="text-3xl font-bold">{item.number}</h3>
            <p className="text-xl text-gray-700">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutStatus;

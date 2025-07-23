import Image, { StaticImageData } from "next/image";

interface StatusItem {
  id: number;
  title: string;
  number: string; // e.g., "45+"
  icon: StaticImageData;
}

interface AboutStatusProps {
  status: StatusItem[];
}

const AboutStatus: React.FC<AboutStatusProps> = ({ status }) => {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-7xl">
        {status.map((item, index) => (
          <div key={item.id} className="flex flex-col items-center space-y-3">
            <div
              className={`relative ${
                index === 1 ? "w-[85px] h-[50px]" : "w-[60px] h-[50px]"
              }`}
            >
              <Image
                src={item.icon}
                alt={item.title}
                className="object-contain"
                fill
              />
            </div>
            <h3 className="text-3xl lg:text-5xl font-bold mt-6">
              {item.number}
            </h3>
            <p className="text-xl lg:text-2xl text-black">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutStatus;

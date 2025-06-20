// app/portfolio/[id]/page.tsx
import { notFound } from "next/navigation";
import { OurProjects } from "@/data/OurProjectData"; // Adjust path
import Image from "next/image";

interface Props {
  params: { id: string };
}

const PortfolioDetail = ({ params }: Props) => {
  const id = parseInt(params.id);
  const project = PortfolioData.find((item) => item.id === id);

  if (!project) return notFound();

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <p className="text-lg text-gray-600 mb-6">{project.subTitle}</p>
      <Image
        src={project.image}
        alt={project.title}
        className="rounded-xl border border-gray-300"
        width={800}
        height={600}
      />
    </div>
  );
};

export default PortfolioDetail;

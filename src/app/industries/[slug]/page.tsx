import { industiesData } from "@/data/industriesData";
import { notFound } from "next/navigation";


export async function generateStaticParams() {
  return industiesData.map((service) => ({
    slug: service.type,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = industiesData.find((s) => s.type === slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }


}

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = industiesData.find((s) => s.type === slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="py-36 ">
      <div className="px-4 sm:px-6 lg:px-16">
      
      </div>

     
      <div className="px-4 sm:px-6 lg:px-16">
        
      </div>
    </main>
  );
}

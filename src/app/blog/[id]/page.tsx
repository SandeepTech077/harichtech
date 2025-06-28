import { notFound } from "next/navigation";
import { MoreBlogsData } from "@/data/MoreBlogsData";
import BlogsBanner from "@/components/Blog/BlogsBanner";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return MoreBlogsData.blogsMap.map((project) => ({
    id: String(project.id),
  }));
}

const BlogsDetails = async ({ params }: Props) => {
  const { id: idParam } = await params;
  const id = parseInt(idParam);
  const project = MoreBlogsData.blogsMap.find((item) => item.id === id);

  if (!project) return notFound();

  return (
    <>
      <div className="h-screen">
        <BlogsBanner
          banner={project.Banner}
          mobileBanner={project.mobileBanner}
          title={project.title}
        />
      </div>
    </>
  );
};

export default BlogsDetails;

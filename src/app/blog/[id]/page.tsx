import { notFound } from "next/navigation";
import { MoreBlogsData } from "@/data/MoreBlogsData";
import BlogsBanner from "@/components/Blog/BlogsBanner";
import BlogContent from "@/components/BlogsCompoenet/BlogContent";

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
      <div className="min-h-screen">
        <BlogsBanner
          Banner={project.Banner}
          mobileBanner={project.mobileBanner}
          title={project.title}
        />
        <BlogContent blogs={project.blogs} />
      </div>
    </>
  );
};

export default BlogsDetails;
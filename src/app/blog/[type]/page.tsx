import { notFound } from "next/navigation";
import { MoreBlogsData } from "@/data/MoreBlogsData";
import BlogHeading from "@/components/Blog/BlogHeading";
import BlogContent from "@/components/BlogsCompoenet/BlogContent";

interface Props {
  params: Promise<{ type: string }>;
}

export async function generateStaticParams() {
  return MoreBlogsData.blogsMap.map((blog) => ({
    type: blog.type.toString(),
  }));
}

async function BlogsDetails({ params }: Props) {
  // ✅ Await params first
  const { type } = await params;
  

  const project = MoreBlogsData.blogsMap.find(
    (item) => item.type === (type)
  );

  if (!project) return notFound();

  return (
    <div className="min-h-screen bg-white">
      <BlogHeading title={project.title} />

      <div className="w-full px-4 lg:px-10 mt-8 flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <BlogContent
            Banner={project.Banner}
            mobileBanner={project.mobileBanner}
            title={project.title}
            blogs={project.blogs}
            currentBlogType={project.type}
          />
        </div>
      </div>
    </div>
  );
}

export default BlogsDetails;

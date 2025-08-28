"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import { MoreBlogsData } from "@/data/MoreBlogsData";
import BlogHeading from "@/components/Blog/BlogHeading";
import BlogContent from "@/components/BlogsCompoenet/BlogContent";

interface Props {
  params: Promise<{ id: string }>; // 👈 promise, not plain object
}

function BlogsDetails({ params }: Props) {
  const { id } = use(params); // 👈 unwrap the promise without await
  const project = MoreBlogsData.blogsMap.find(
    (item) => item.id === parseInt(id)
  );

  if (!project) return notFound();

  return (
    <div className="min-h-screen bg-white">
      <BlogHeading title={project.title} />

      <div className="w-full px-4 lg:px-16 mt-8 flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <BlogContent
            Banner={project.Banner}
            mobileBanner={project.mobileBanner}
            title={project.title}
            blogs={project.blogs}
          />
        </div>
      </div>
    </div>
  );
}

export default BlogsDetails;

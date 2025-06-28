import { BlogData } from "@/data/BlogData";
import BannerSection from "@/components/Blog/BannerSection";
import { BlogCard } from "@/components/Blog/BlogCard";
import MotionComponent from "@/Animation/MotionComponent";

export default function BlogPage() {
  const { BannerSection: bannerData, blogs } = BlogData;

  return (
    <main className="w-full py-22 md:py-36 px-5 md:px-10 lg:px-20 space-y-10">
      {/* Animated Banner Section */}
      <MotionComponent type="slideIn" duration={1} delay={0.3}>
        <BannerSection
          id={bannerData.id}
          banner={bannerData.banner}
          mobileBanner={bannerData.mobileBanner}
          title={bannerData.title}
          describation={bannerData.description}
          btnRedirect={bannerData.btnRedirect}
          btnArrowSvg={bannerData.btnArrowSvg}
        />
      </MotionComponent>

      {/* Animated Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <BlogCard
            id={blog.id}
            key={blog.id}
            image={blog.image}
            title={blog.title}
            dateAndBy={blog.dateAndBy}
            description={blog.description}
            btnTitle={blog.btnTitle}
            btnArrow={blog.btnArrow}
            showSectionTitle={index === 0} // Only on first card
          />
        ))}
      </div>
    </main>
  );
}

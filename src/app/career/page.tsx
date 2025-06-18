import Hiring from "@/components/Ui/Hiring";
import Banner from "../../components/Ui/Banner";
import { Career } from "@/data/Career";
import WhyChooseUs from "@/components/ServiceList/WhyChooseUs";
import ResumeUpload from "@/components/Ui/ResumeUpload";

export default function ServicesPage() {
  const { bannerSection, hiring, upload, whyChooseUs } = Career;
  
  return (
    <div className=" px-4 lg:px-16 mt-22 lg:mt-36">
      <Banner
        title={bannerSection.title}
        subTitle={bannerSection.subTitle}
        banner={bannerSection.banner}
      />
      <Hiring data={hiring} />
      <ResumeUpload data={upload} />
      <WhyChooseUs whyUsData={whyChooseUs} />
    </div>
  );
}
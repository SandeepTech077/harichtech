import Hiring from "@/components/Ui/Hiring";
import Banner from "../../components/Ui/Banner";
import { Career } from "@/data/Career";
import WhyChooseUs from "@/components/ServiceList/WhyChooseUs";
import ResumeUpload from "@/components/Ui/ResumeUpload";
import MotionComponent from "@/Animation/MotionComponent";

export default function ServicesPage() {
  const { bannerSection, hiring, upload, whyChooseUs } = Career;
  
  return (
    <div className=" px-4 lg:px-16 mt-22 lg:mt-36">
      <MotionComponent type="bounce" duration={1} delay={0.5}>
        <Banner
          title={bannerSection.title}
          subTitle={bannerSection.subTitle}
          banner={bannerSection.banner}
        />
      </MotionComponent>

      <MotionComponent type="bounce" duration={1} delay={0.75}>
        <Hiring data={hiring} />
      </MotionComponent>

      <MotionComponent type="bounce" duration={1} delay={0.95}>
        <ResumeUpload data={upload} />
      </MotionComponent>
      
      <WhyChooseUs whyUsData={whyChooseUs} />
    </div>
  );
}
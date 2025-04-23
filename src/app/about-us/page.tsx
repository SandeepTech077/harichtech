import { AboutUsData } from "@/data/AboutUsData";
import AboutUs from "@/components/AboutUsComponents/AboutUs";
import AboutStatus from "@/components/AboutUsComponents/AboutStatus";
import InnovationMeet from "@/components/AboutUsComponents/InnovationMeet";
import MotionComponent from "@/Animation/MotionComponent";

export default function AboutPage() {
  const { aboutUs, ourStatus, innovationMeet } = AboutUsData;

  return (
    <main className="w-full pt-20 px-5 md:px-10 lg:px-20 space-y-10">
      <MotionComponent type="slideIn" duration={1} delay={0.3}>
        <AboutUs aboutUs={aboutUs} />
      </MotionComponent>

      <MotionComponent type="fadeIn" duration={1} delay={0.5}>
        <AboutStatus status={ourStatus.status} />
      </MotionComponent>

      <MotionComponent type="bounce" duration={1} delay={0.7}>
        <InnovationMeet innovationMeet={innovationMeet} />
      </MotionComponent>
    </main>
  );
}

import { OurWorkData } from "@/data/OurWorkData";
import MainTitle from "@/components/OurWork/MainTitle";
import Portfolio from "@/components/OurWork/Portfolio";
import MotionComponent from "@/Animation/MotionComponent";

export default function OurWorkPage() {
  const { mainTitle, portfolio } = OurWorkData;

  return (
    <main className="w-full px-5 md:px-10 lg:px-20 mx-auto space-y-10 py-20">
    
        <MainTitle 
          title={mainTitle.title}
          subTitle={mainTitle.subTitle}
          description={mainTitle.describation}
          btnTitle={mainTitle.btnTitle}
        />
 

      <MotionComponent type="bounce" duration={1} delay={0.5}>
        <Portfolio 
          title={portfolio.title}
          subTitle={portfolio.subTitle}
          images={portfolio.Images}
        />
      </MotionComponent>
    </main>
  );
}

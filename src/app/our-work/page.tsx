import { OurWorkData } from "@/data/OurWorkData";
import MainTitle from "@/components/OurWork/MainTitle";
import Portfolio from "@/components/OurWork/Portfolio";

export default function OurWorkPage() {
  const { mainTitle, design } = OurWorkData;

  return (
    <main className="w-full  mx-auto space-y-10 py-22 md:py-36">
      <MainTitle 
       mainTitle={mainTitle}
      />

        <Portfolio design={design} />
    </main>
  );
}
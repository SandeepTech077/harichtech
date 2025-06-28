import { OurWorkData } from "@/data/OurWorkData";
import Portfolio from "@/components/OurWork/Portfolio";

export default function OurWorkPage() {
  const { design } = OurWorkData;

  return (
    <main className="w-full  mx-auto space-y-10 py-22 md:py-40">
      <Portfolio design={design} />
    </main>
  );
}

import Banner from "@/components/banner";
import Best from "@/components/best";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Recent from "@/components/recent";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-24 sm:px-[11.2rem]">
      <Hero />
      <Recent />
      <Best />
      <Banner />
      <Footer />
    </main>
  );
}

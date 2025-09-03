import Feature from "@/components/Feature";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Page = () => {
  return (
    <div className="text-black">
      <Navbar />
      <Hero />
      <Feature />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Page;

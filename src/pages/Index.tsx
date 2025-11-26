import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Knowledge from "@/components/home/Knowledge";
import Contact from "@/components/home/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Knowledge />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ServiceCards from "@/components/ServiceCards";
import CredentialsSection from "@/components/CredentialsSection";
import ServiceSplits from "@/components/ServiceSplits";
import FeaturedProjects from "@/components/FeaturedProjects";
import FullWidthImage from "@/components/FullWidthImage";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <ServiceCards />
        <CredentialsSection />
        <ServiceSplits />
        <FeaturedProjects />
        <FullWidthImage />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

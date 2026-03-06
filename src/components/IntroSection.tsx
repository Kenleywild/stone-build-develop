import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const IntroSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container-narrow text-center">
        <h1 className="heading-xl text-foreground mb-8">
          Where Vision Meets<br />Craftsmanship
        </h1>
        
        <p className="body-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
          We create exceptional residential and commercial spaces where quality and purpose come together in perfect harmony.
        </p>
        
        <p className="body-base text-muted-foreground mb-12 max-w-2xl mx-auto">
          Every element is carefully considered to create lasting value that enriches your property and lifestyle. Crafted with care and precision, our work reflects a commitment to exceptional design and lasting quality.
        </p>

        {/* Divider */}
        <div className="w-12 h-px bg-border mx-auto mb-8" />

        {/* Company Logo */}
        <img src={logo} alt="Stone Development Inc" className="h-12 mx-auto mb-10" />

        <a href="tel:+19495086763">
          <Button variant="outline" size="lg" className="px-8">
            Book a Consultation
          </Button>
        </a>
      </div>
    </section>
  );
};

export default IntroSection;

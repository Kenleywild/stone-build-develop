import { Button } from "@/components/ui/button";

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

        {/* Company Name */}
        <p className="font-serif text-lg font-medium text-foreground tracking-wide mb-10">
          STONE DEVELOPMENT
        </p>

        <Button variant="outline" size="lg" className="px-8">
          Book a Consultation
        </Button>
      </div>
    </section>
  );
};

export default IntroSection;

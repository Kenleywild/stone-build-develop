import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Hero = () => {
  return (
    <section className="relative pt-20">
      {/* Full-width Hero Video */}
      <div className="w-full h-[75vh] md:h-[85vh] overflow-hidden relative">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-125 md:scale-100 transition-transform duration-300"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-5 max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white mb-6 md:mb-8 leading-tight">
              Where Vision Meets<br />Craftsmanship
            </h1>

            <p className="text-base md:text-lg text-white/80 mb-4 max-w-2xl mx-auto">
              We create exceptional residential and commercial spaces where quality and purpose come together in perfect harmony.
            </p>

            <p className="text-sm md:text-base text-white/60 mb-10 max-w-2xl mx-auto">
              Every element is carefully considered to create lasting value that enriches your property and lifestyle. Crafted with care and precision, our work reflects a commitment to exceptional design and lasting quality.
            </p>

            {/* Divider */}
            <div className="w-12 h-px bg-white/30 mx-auto mb-8" />

            {/* Company Logo */}
            <img src={logo} alt="Stone Development Inc" className="h-12 mx-auto mb-10 brightness-0 invert" />

            <a href="#contact">
              <Button variant="outline" size="lg" className="px-8 bg-foreground text-background border-foreground hover:bg-foreground/90 hover:text-background">
                Book a Consultation
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

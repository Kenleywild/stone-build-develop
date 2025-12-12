import logo from "@/assets/logo.png";

const CredentialsSection = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-charcoal">
      <div className="container-narrow text-center px-6 md:px-8">
        {/* Company Logo */}
        <div className="mb-8 md:mb-10">
          <img src={logo} alt="Stone Development Inc" className="h-10 md:h-14 mx-auto invert opacity-80" />
        </div>

        <h2 className="font-serif text-2xl md:text-3xl lg:text-5xl text-cream font-medium mb-3 md:mb-4 italic">
          A Trusted Name
        </h2>
        
        <p className="text-xs md:text-sm text-cream/60 uppercase tracking-[0.15em] md:tracking-[0.2em] mb-8 md:mb-12">
          in Residential & Commercial Construction
        </p>

        {/* Divider */}
        <div className="w-10 md:w-12 h-px bg-cream/30 mx-auto mb-8 md:mb-12" />

        <p className="text-sm md:text-base text-cream/70 mb-3 md:mb-4 max-w-xl mx-auto leading-relaxed">
          Acclaimed craftsmanship. Unmatched quality. Impeccable service.
        </p>
        
        <p className="text-sm md:text-base text-cream/60 max-w-2xl mx-auto mb-10 md:mb-16 leading-relaxed">
          As a licensed and insured construction firm, we set the standard for quality residential and commercial projects. Every detail reflects our devotion to exceptional design and an outstanding client experience.
        </p>

        {/* Trust Badges - 2x2 grid on mobile, row on desktop */}
        <div className="grid grid-cols-2 md:flex md:flex-wrap items-center justify-center gap-6 md:gap-12 lg:gap-16">
          <div className="text-cream/50">
            <p className="text-[10px] md:text-xs uppercase tracking-widest mb-0.5 md:mb-1">Licensed</p>
            <p className="font-serif text-base md:text-lg">& Bonded</p>
          </div>
          <div className="text-cream/50">
            <p className="text-[10px] md:text-xs uppercase tracking-widest mb-0.5 md:mb-1">20+ Years</p>
            <p className="font-serif text-base md:text-lg">Experience</p>
          </div>
          <div className="text-cream/50">
            <p className="text-[10px] md:text-xs uppercase tracking-widest mb-0.5 md:mb-1">Local</p>
            <p className="font-serif text-base md:text-lg">Expertise</p>
          </div>
          <div className="text-cream/50">
            <p className="text-[10px] md:text-xs uppercase tracking-widest mb-0.5 md:mb-1">Fully</p>
            <p className="font-serif text-base md:text-lg">Insured</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredentialsSection;

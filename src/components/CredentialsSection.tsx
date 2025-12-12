const CredentialsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-charcoal">
      <div className="container-narrow text-center">
        {/* Script Logo / Monogram */}
        <div className="mb-10">
          <span className="font-serif text-5xl md:text-6xl italic text-cream/80">S</span>
        </div>

        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-cream font-medium mb-4 italic">
          A Trusted Name
        </h2>
        
        <p className="text-sm md:text-base text-cream/60 uppercase tracking-[0.2em] mb-12">
          in Residential & Commercial Construction
        </p>

        {/* Divider */}
        <div className="w-12 h-px bg-cream/30 mx-auto mb-12" />

        <p className="body-base text-cream/70 mb-4 max-w-xl mx-auto">
          Acclaimed craftsmanship. Unmatched quality. Impeccable service.
        </p>
        
        <p className="body-base text-cream/60 max-w-2xl mx-auto mb-16">
          As a licensed and insured construction firm, we set the standard for quality residential and commercial projects. Every detail reflects our devotion to exceptional design and an outstanding client experience.
        </p>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          <div className="text-cream/40">
            <p className="text-xs uppercase tracking-widest mb-1">Licensed</p>
            <p className="font-serif text-lg">& Bonded</p>
          </div>
          <div className="text-cream/40">
            <p className="text-xs uppercase tracking-widest mb-1">20+ Years</p>
            <p className="font-serif text-lg">Experience</p>
          </div>
          <div className="text-cream/40">
            <p className="text-xs uppercase tracking-widest mb-1">Local</p>
            <p className="font-serif text-lg">Expertise</p>
          </div>
          <div className="text-cream/40">
            <p className="text-xs uppercase tracking-widest mb-1">Fully</p>
            <p className="font-serif text-lg">Insured</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredentialsSection;

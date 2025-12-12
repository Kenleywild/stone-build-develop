import heroImage from "@/assets/hero-interior.jpg";

const Hero = () => {
  return (
    <section className="pt-20">
      {/* Full-width Hero Image */}
      <div className="w-full h-[75vh] md:h-[85vh] overflow-hidden">
        <img
          src={heroImage}
          alt="Luxury modern interior construction project"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;

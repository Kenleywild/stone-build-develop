import { Button } from "@/components/ui/button";
import serviceRenovation from "@/assets/service-renovation.jpg";
import serviceNewConstruction from "@/assets/service-new-construction.jpg";

const serviceCategories = [
  {
    image: serviceRenovation,
    title: "Remodeling",
    href: "#remodeling",
  },
  {
    image: serviceNewConstruction,
    title: "New Construction",
    href: "#new-construction",
  },
];

const ServiceCards = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {serviceCategories.map((service, index) => (
            <a
              key={index}
              href={service.href}
              className="group relative aspect-[4/5] overflow-hidden"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-transparent" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-12 md:pb-16">
                <h3 className="font-serif text-3xl md:text-4xl text-cream font-medium mb-6 tracking-wide">
                  {service.title}
                </h3>
                <Button 
                  variant="outline" 
                  size="default"
                  className="border-cream/50 text-cream bg-transparent hover:bg-cream/10 hover:border-cream"
                >
                  Explore
                </Button>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;

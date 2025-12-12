import { Plus } from "lucide-react";
import projectKitchen from "@/assets/project-kitchen.jpg";
import projectBathroom from "@/assets/project-bathroom.jpg";

const remodelingServices = [
  "Kitchen Remodeling",
  "Bathroom Remodeling", 
  "Room Additions",
  "Full Home Renovations",
  "Structural Renovations",
  "Water Damage Restoration",
  "Fire Damage Restoration",
];

const newConstructionServices = [
  "Custom Home Building",
  "Accessory Dwelling Units (ADUs)",
  "Commercial Build-Outs",
  "Additions & Expansions",
  "Multi-Unit Developments",
  "Design-Build Projects",
];

const ServiceSplits = () => {
  return (
    <>
      {/* Remodeling Section */}
      <section id="remodeling" className="py-16 md:py-24 bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={projectKitchen}
                alt="Luxury kitchen remodeling project"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div>
              <h2 className="heading-lg text-foreground mb-6">
                Expert Remodeling<br />& Renovation.
              </h2>
              
              <p className="body-base text-muted-foreground mb-10 max-w-lg">
                From beautiful kitchen transformations to complete home renovations, discover unparalleled quality with expert craftsmanship by Stone Development.
              </p>

              <ul className="space-y-4">
                {remodelingServices.map((service, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Plus className="h-4 w-4 text-stone flex-shrink-0" />
                    <span className="text-sm uppercase tracking-wider text-foreground/80">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* New Construction Section */}
      <section id="new-construction" className="py-16 md:py-24 bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content - Left on desktop */}
            <div className="order-2 lg:order-1">
              <h2 className="heading-lg text-foreground mb-6">
                Custom New<br />Construction.
              </h2>
              
              <p className="body-base text-muted-foreground mb-10 max-w-lg">
                Transform your vision into reality with custom new construction that reflects your unique style and needs. We build from the ground up with precision and care.
              </p>

              <ul className="space-y-4">
                {newConstructionServices.map((service, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Plus className="h-4 w-4 text-stone flex-shrink-0" />
                    <span className="text-sm uppercase tracking-wider text-foreground/80">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image - Right on desktop */}
            <div className="order-1 lg:order-2 aspect-[4/5] overflow-hidden">
              <img
                src={projectBathroom}
                alt="Luxury bathroom construction project"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceSplits;

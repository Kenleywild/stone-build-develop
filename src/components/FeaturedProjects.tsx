import { useState } from "react";
import { Button } from "@/components/ui/button";
import projectKitchen from "@/assets/project-kitchen.jpg";
import projectBathroom from "@/assets/project-bathroom.jpg";
import projectAddition from "@/assets/project-addition.jpg";
import projectAdu from "@/assets/project-adu.jpg";
import projectExterior from "@/assets/project-exterior.jpg";
import projectExteriorAfter from "@/assets/project-exterior-after.jpg";

const projects = [
  {
    image: projectKitchen,
    title: "Modern Kitchen Renovation",
    category: "Kitchen Remodeling",
    size: "large",
  },
  {
    image: projectBathroom,
    title: "Spa-Inspired Bathroom",
    category: "Bathroom Remodeling",
    size: "medium",
  },
  {
    image: projectExterior,
    title: "Exterior Home Renovation",
    category: "Full Home Remodeling",
    size: "medium",
  },
  {
    image: projectExteriorAfter,
    title: "Exterior Renovation — After",
    category: "Full Home Remodeling",
    size: "medium",
  },
  {
    image: projectAddition,
    title: "Contemporary Home Addition",
    category: "New Construction",
    size: "medium",
  },
  {
    image: projectAdu,
    title: "Backyard ADU",
    category: "Accessory Dwelling Unit",
    size: "large",
  },
];

const FeaturedProjects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="section-padding bg-charcoal">
      <div className="container-wide">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <h2 className="heading-lg text-cream mb-4">Recent Work</h2>
            <p className="body-base text-cream/70 max-w-xl">
              A selection of our recent residential and commercial projects.
            </p>
          </div>
          <Button variant="hero-outline" size="lg">
            View All Projects
          </Button>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`relative overflow-hidden cursor-pointer group ${
                project.size === "large" ? "md:row-span-2 aspect-[4/5]" : "aspect-[4/3]"
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/60 transition-all duration-500`}
              />
              {/* Content */}
              <div
                className={`absolute inset-0 flex flex-col justify-end p-6 md:p-8 transition-all duration-500 ${
                  hoveredIndex === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <p className="text-cream/70 text-sm uppercase tracking-wider mb-2">
                  {project.category}
                </p>
                <h3 className="font-serif text-xl md:text-2xl text-cream font-medium">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;

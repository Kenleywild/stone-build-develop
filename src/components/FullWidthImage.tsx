import projectAddition from "@/assets/project-addition.jpg";

const FullWidthImage = () => {
  return (
    <section className="w-full">
      <div className="w-full h-[60vh] md:h-[80vh] overflow-hidden">
        <img
          src={projectAddition}
          alt="Modern home construction project"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default FullWidthImage;

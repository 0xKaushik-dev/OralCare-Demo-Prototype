import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import serviceGeneral from "@/assets/service-general.jpg";
import serviceOrtho from "@/assets/service-ortho-new.jpg";
import serviceCosmetic from "@/assets/service-cosmetic-new.jpg";
import serviceSurgery from "@/assets/service-surgery.jpg";

const services = [
  {
    num: "01",
    title: "General Dentistry",
    desc: "Comprehensive dental care including cleanings, fillings, and preventive treatments to maintain your oral health.",
    tags: ["Cleaning", "Fillings", "Check-ups"],
    img: serviceGeneral,
  },
  {
    num: "02",
    title: "Orthodontics Care",
    desc: "Straighten your teeth with modern braces and clear aligners for a perfect, confident smile.",
    tags: ["Braces", "Aligners", "Retainers"],
    img: serviceOrtho,
  },
  {
    num: "03",
    title: "Cosmetic Dentistry",
    desc: "Transform your smile with whitening, veneers, and aesthetic treatments designed for stunning results.",
    tags: ["Whitening", "Veneers", "Bonding"],
    img: serviceCosmetic,
  },
  {
    num: "04",
    title: "Oral Surgery",
    desc: "Expert surgical procedures including extractions, implants, and corrective jaw surgery.",
    tags: ["Implants", "Extractions", "Jaw Surgery"],
    img: serviceSurgery,
  },
];

const ServiceCard = ({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const isReversed = index % 2 !== 0;

  return (
    <div
      ref={ref}
      className={`grid md:grid-cols-2 gap-8 items-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className={`${isReversed ? "md:order-2" : ""}`}>
        <div className="rounded-3xl overflow-hidden">
          <img
            src={service.img}
            alt={service.title}
            className="w-full h-[300px] object-cover object-top hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
      <div className={`${isReversed ? "md:order-1" : ""}`}>
        <span className="text-5xl font-bold text-primary/20 font-[Sora]">{service.num}</span>
        <h3 className="text-2xl md:text-3xl font-bold font-[Sora] text-foreground mt-2 mb-4">
          {service.title}
        </h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-muted-foreground mb-6">{service.desc}</p>
        <button className="inline-flex items-center gap-2 text-foreground font-medium group">
          View Details
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between mb-14">
          <div>
            <span className="inline-block bg-primary/15 text-foreground px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              Our Services
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-[Sora] text-foreground">
              Our Services
            </h2>
          </div>
          <button className="hidden md:inline-flex items-center gap-2 text-foreground font-medium group">
            View Services
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="space-y-16">
          {services.map((service, i) => (
            <ServiceCard key={service.num} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import aboutImg from "@/assets/about-dental.jpg";

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-20 bg-background">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
      >
        <div>
          <span className="inline-block bg-primary/15 text-foreground px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            About Us
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-[Sora] text-foreground mb-6 leading-tight">
            We're Committed to Your Dental Health
          </h2>
          <p className="text-muted-foreground text-lg mb-4">
            At Meddent Dental and Child Clinic, led by Dr. Deepti Monga, we believe that everyone deserves a beautiful, healthy smile. Our team provides comprehensive dental and specialized child care in a comfortable environment.
          </p>
          <p className="text-muted-foreground mb-8">
            From routine check-ups to advanced pediatric dentistry and cosmetic procedures, we offer a full range of services tailored to meet your family's unique needs in Gurugram.
          </p>
          <button className="inline-flex items-center gap-2 text-foreground font-medium group">
            About Dr. Deepti Monga
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="relative">
          <div className="rounded-3xl overflow-hidden">
            <img src={aboutImg} alt="Our dental clinic" className="w-full h-[450px] object-cover" />
          </div>
          <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground rounded-2xl px-6 py-4 shadow-lg">
            <p className="text-3xl font-bold font-[Sora]">15+</p>
            <p className="text-sm">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

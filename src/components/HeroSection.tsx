import { ArrowRight, Star } from "lucide-react";
import heroImg from "@/assets/hero-smile.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img src={heroImg} alt="Smiling patient" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full py-20">
        <div className="max-w-2xl">
          <div className="animate-slide-up">
            <span className="inline-block bg-primary/15 text-foreground px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              Welcome to Meddent Dental and Child Clinic
            </span>
          </div>

          <h1 className="animate-slide-up-delay-1 text-4xl md:text-6xl font-bold leading-[1.1] font-[Sora] text-foreground mb-4">
            Meddent Dental & <br />
            <span className="text-primary">Child Clinic</span>
          </h1>
          <h2 className="animate-slide-up-delay-1 text-xl md:text-2xl font-semibold text-foreground/80 mb-6 font-sans">
            मेडेंट डेंटल एंड चाइल्ड क्लिनिक
          </h2>
          <p className="animate-slide-up-delay-2 text-xl font-medium text-foreground mb-2">
            Dr. Deepti Monga
          </p>

          <p className="animate-slide-up-delay-2 text-muted-foreground text-lg md:text-xl max-w-lg mb-8">
            We provide the best dental care services to keep your smile bright and healthy. Experience world-class treatment.
          </p>

          <div className="animate-slide-up-delay-3 flex flex-wrap gap-4 mb-12">
            <button
              onClick={() => document.getElementById("appointment")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-primary text-primary-foreground px-7 py-3.5 rounded-full font-medium hover:brightness-110 transition-all flex items-center gap-2"
            >
              Book Appointment <ArrowRight size={18} />
            </button>
            <button
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              className="border-2 border-foreground/20 text-foreground px-7 py-3.5 rounded-full font-medium hover:bg-foreground/5 transition-all"
            >
              Our Services
            </button>
          </div>

          <div className="animate-slide-up-delay-3 inline-flex items-center gap-3 bg-card/80 backdrop-blur-sm rounded-full px-5 py-3 shadow-md">
            <div className="bg-primary/15 p-2 rounded-full">
              <Star size={18} className="text-primary fill-primary" />
            </div>
            <div>
              <p className="font-semibold text-sm text-foreground">Top Dentists & Tech</p>
              <p className="text-xs text-muted-foreground">Trusted by 1200+ patients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

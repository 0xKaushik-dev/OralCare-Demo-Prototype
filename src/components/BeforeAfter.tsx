import { ArrowRight, Sparkles } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import beforeAfterImg from "@/assets/before-after.jpg";

const BeforeAfter = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 bg-background">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
      >
        <div>
          <span className="inline-block bg-primary/15 text-foreground px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            Results
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-[Sora] text-foreground mb-6 leading-tight">
            Before & After Gallery
          </h2>

          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="bg-primary/15 p-2 rounded-full">
                <Sparkles size={18} className="text-primary" />
              </div>
              <p className="text-foreground font-medium">Free Consultation Available</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-primary/15 p-2 rounded-full">
                <Sparkles size={18} className="text-primary" />
              </div>
              <p className="text-foreground font-medium">Smiles Made Simple</p>
            </div>
          </div>

          <p className="text-muted-foreground mb-8">
            See the transformations our patients have experienced. From teeth whitening to complete smile makeovers, our results speak for themselves.
          </p>

          <button
            onClick={() => document.getElementById("appointment")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-primary text-primary-foreground px-7 py-3.5 rounded-full font-medium hover:brightness-110 transition-all flex items-center gap-2"
          >
            Make an Appointment <ArrowRight size={18} />
          </button>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-xl">
          <img src={beforeAfterImg} alt="Before and after dental treatment" className="w-full h-[400px] object-cover" />
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;

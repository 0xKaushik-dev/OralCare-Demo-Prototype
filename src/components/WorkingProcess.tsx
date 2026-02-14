import { useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import processImg from "@/assets/process-step.jpg";

const steps = [
  {
    num: "01",
    title: "Schedule Your Visit",
    desc: "Book your appointment online or call us. We offer flexible scheduling to fit your busy lifestyle.",
    tags: ["Online Booking", "Flexible Hours", "Easy Scheduling"],
  },
  {
    num: "02",
    title: "Initial Consultation",
    desc: "Meet with our dentist for a thorough examination and discuss your dental health goals.",
    tags: ["Examination", "X-Rays", "Discussion"],
  },
  {
    num: "03",
    title: "Treatment Plan",
    desc: "Receive a personalized treatment plan tailored to your specific needs and preferences.",
    tags: ["Custom Plan", "Cost Estimate", "Timeline"],
  },
  {
    num: "04",
    title: "Follow-Up Care",
    desc: "We provide ongoing care and follow-up appointments to ensure lasting results.",
    tags: ["Check-ups", "Maintenance", "Support"],
  },
];

const WorkingProcess = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 bg-secondary">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
      >
        <div className="text-center mb-14">
          <span className="inline-block bg-primary/15 text-foreground px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            How It Works
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-[Sora] text-foreground mb-4">
            Working Process
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Our streamlined process ensures you receive the best dental care from start to finish.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-4">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className={`rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === i ? "bg-card shadow-lg" : "bg-card/50 hover:bg-card/80"
                  }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-primary font-bold text-lg font-[Sora]">{step.num}</span>
                    <span className="font-semibold text-foreground font-[Sora]">{step.title}</span>
                  </div>
                  <ChevronDown
                    size={20}
                    className={`text-muted-foreground transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""
                      }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${openIndex === i ? "max-h-60 pb-5 px-5" : "max-h-0"
                    }`}
                >
                  <p className="text-muted-foreground mb-4">{step.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {step.tags.map((tag) => (
                      <span key={tag} className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="inline-flex items-center gap-2 text-primary font-medium text-sm group">
                    Learn More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-3xl overflow-hidden">
            <img src={processImg} alt="Dental consultation" className="w-full h-[450px] object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;

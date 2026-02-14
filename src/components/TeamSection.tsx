import { Phone, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import doctor1 from "@/assets/doctor1.jpg";
import doctor2 from "@/assets/doctor2.jpg";
import doctor3 from "@/assets/doctor3.jpg";

const doctors = [
  { name: "Dr. James Wilson", specialty: "General Dentist", phone: "+1 (555) 123-4567", img: doctor1 },
  { name: "Dr. Sarah Martinez", specialty: "Orthodontist", phone: "+1 (555) 234-5678", img: doctor2 },
  { name: "Dr. Michael Chen", specialty: "Oral Surgeon", phone: "+1 (555) 345-6789", img: doctor3 },
];

const TeamSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="team" className="py-20 bg-secondary">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
      >
        <div className="flex items-center justify-between mb-14">
          <div>
            <span className="inline-block bg-primary/15 text-foreground px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              Our Team
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-[Sora] text-foreground">Team Members</h2>
          </div>
          <button className="hidden md:inline-flex items-center gap-2 text-foreground font-medium group">
            View All <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {doctors.map((doc, i) => (
            <div
              key={doc.name}
              className="bg-card rounded-3xl overflow-hidden group hover:shadow-xl transition-all duration-300"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="overflow-hidden h-72">
                <img
                  src={doc.img}
                  alt={doc.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl font-[Sora] text-foreground">{doc.name}</h3>
                <p className="text-primary text-sm font-medium mb-3">{doc.specialty}</p>
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                  <Phone size={14} />
                  <span>{doc.phone}</span>
                </div>
                <button className="w-full bg-accent text-accent-foreground py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
                  Book an Appointment
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

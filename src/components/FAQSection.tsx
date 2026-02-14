import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What services does OralCare offer?",
    a: "We offer a comprehensive range of dental services including general dentistry, orthodontics, cosmetic dentistry, oral surgery, teeth whitening, dental implants, and preventive care.",
  },
  {
    q: "How often should I visit the dentist?",
    a: "We recommend visiting the dentist every 6 months for routine check-ups and cleanings. However, some patients may need more frequent visits depending on their dental health needs.",
  },
  {
    q: "Is dental treatment painful?",
    a: "Modern dental techniques and anesthesia make most procedures comfortable and pain-free. We prioritize your comfort and offer sedation options for anxious patients.",
  },
  {
    q: "Do you accept dental insurance?",
    a: "Yes, we accept most major dental insurance plans. Our team will help you understand your coverage and maximize your benefits.",
  },
  {
    q: "How long does teeth whitening last?",
    a: "Professional teeth whitening results typically last 6 months to 2 years, depending on your habits. Avoiding staining foods and beverages helps maintain results longer.",
  },
  {
    q: "What should I do in a dental emergency?",
    a: "Contact us immediately for dental emergencies. We offer same-day emergency appointments. In the meantime, rinse with warm water and apply a cold compress to reduce swelling.",
  },
];

const FAQSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 bg-secondary">
      <div
        ref={ref}
        className={`max-w-3xl mx-auto px-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
      >
        <div className="text-center mb-14">
          <span className="inline-block bg-primary/15 text-foreground px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-[Sora] text-foreground">
            Frequently Asked Questions
          </h2>
        </div>

        <Accordion type="single" collapsible defaultValue="item-0" className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="bg-card rounded-2xl px-6 border-0 shadow-sm"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline font-[Sora] text-base">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;

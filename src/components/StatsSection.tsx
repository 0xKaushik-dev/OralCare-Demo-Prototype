import { useScrollAnimation, useCountUp } from "@/hooks/useScrollAnimation";

const stats = [
  { value: 4.5, suffix: "/5", label: "Clinic Rating" },
  { value: 17, suffix: "+", label: "Google Reviews" },
  { value: 1200, suffix: "+", label: "Happy Patients" },
  { value: 5, suffix: "+", label: "Years Excellence" },
];

const StatItem = ({ value, suffix, label, isVisible }: { value: number; suffix: string; label: string; isVisible: boolean }) => {
  const count = useCountUp(value, 2000, isVisible);
  return (
    <div className="text-center">
      <p className="text-4xl md:text-5xl font-bold font-[Sora] text-foreground">
        {count}{suffix}
      </p>
      <p className="text-muted-foreground mt-1 text-sm">{label}</p>
    </div>
  );
};

const StatsSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.3);

  return (
    <section ref={ref} className="py-16 bg-accent text-accent-foreground">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s) => (
          <StatItem key={s.label} {...s} isVisible={isVisible} />
        ))}
      </div>
    </section>
  );
};

export default StatsSection;

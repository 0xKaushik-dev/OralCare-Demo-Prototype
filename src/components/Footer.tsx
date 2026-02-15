import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold font-[Sora] mb-6">Let's Get Connected</h2>
          <div className="flex justify-center gap-4 mb-8">
            {["X", "In", "Ig"].map((s) => (
              <div
                key={s}
                className="w-10 h-10 rounded-full border border-accent-foreground/20 flex items-center justify-center text-sm font-medium hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all cursor-pointer"
              >
                {s}
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-2 text-accent-foreground/70 mb-4">
            <Mail size={18} />
            <span>drdeeptimonga@gmail.com</span>
          </div>
          <p className="text-accent-foreground/60 text-sm max-w-md mx-auto mb-12">
            Chowk, Bhim Nagar, Sector 6, Gurugram, Haryana – 122001
          </p>
        </div>

        <div className="border-t border-accent-foreground/10 pt-8">
          <p className="text-center text-7xl md:text-9xl font-bold font-[Sora] text-accent-foreground/10 select-none">
            Meddent
          </p>
        </div>

        <p className="text-center text-accent-foreground/40 text-sm mt-8">
          © 2026 Meddent Dental and Child Clinic. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = ["Home", "About", "Services", "Team", "Blog"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    const targetId = id.toLowerCase();
    // @ts-ignore
    if (window.lenis) {
      // @ts-ignore
      window.lenis.scrollTo(`#${targetId}`, {
        offset: -80, // Offset for fixed header
        duration: 1.5,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    } else {
      const el = document.getElementById(targetId);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl rounded-full px-6 py-3 flex items-center justify-between transition-all duration-300 ${scrolled
        ? "bg-card/80 backdrop-blur-lg shadow-lg"
        : "bg-card/60 backdrop-blur-md"
        }`}
    >
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
          <span className="text-primary-foreground font-bold text-sm font-[Sora]">M</span>
        </div>
        <span className="font-semibold text-lg font-[Sora] text-foreground">Meddent</span>
      </div>

      {/* Desktop */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <button
            key={link}
            onClick={() => scrollTo(link)}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {link}
          </button>
        ))}
      </div>

      <button
        onClick={() => scrollTo("appointment")}
        className="hidden md:block bg-accent text-accent-foreground px-5 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
      >
        Book Appointment
      </button>

      {/* Mobile toggle */}
      <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-card rounded-2xl shadow-xl p-6 flex flex-col gap-4 md:hidden">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="text-left text-foreground hover:text-primary transition-colors"
            >
              {link}
            </button>
          ))}
          <button
            onClick={() => scrollTo("appointment")}
            className="bg-accent text-accent-foreground px-5 py-2.5 rounded-full text-sm font-medium"
          >
            Book Appointment
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

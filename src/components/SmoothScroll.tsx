import { useEffect } from "react";
import Lenis from "lenis";

const SmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1, // Fixed linear interpolation for consistent feel
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      infinite: false,
      autoResize: true,
    });

    // @ts-ignore
    window.lenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Add CSS for Lenis
    const style = document.createElement("style");
    style.innerHTML = `
      html.lenis {
        height: auto;
      }
      .lenis.lenis-smooth {
        scroll-behavior: auto !important;
      }
      .lenis.lenis-smooth [data-lenis-prevent] {
        overscroll-behavior: contain;
      }
      .lenis.lenis-stopped {
        overflow: hidden;
      }
      .lenis.lenis-scrolling iframe {
        pointer-events: none;
      }
    `;
    document.head.appendChild(style);

    return () => {
      lenis.destroy();
      document.head.removeChild(style);
    };
  }, []);

  return null;
};

export default SmoothScroll;

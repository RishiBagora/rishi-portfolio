import { useEffect, useRef } from "react";
import gsap from "gsap";

const MagneticCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;

    let mouse = { x: 0, y: 0 };
    let dotPos = { x: 0, y: 0 };
    let ringPos = { x: 0, y: 0 };

    // Smooth animation loop
    const animate = () => {
      // Inner dot = faster
      dotPos.x += (mouse.x - dotPos.x) * 0.35;
      dotPos.y += (mouse.y - dotPos.y) * 0.35;

      // Outer ring = slower (lag effect)
      ringPos.x += (mouse.x - ringPos.x) * 0.12;
      ringPos.y += (mouse.y - ringPos.y) * 0.12;

      gsap.set(dot, { x: dotPos.x, y: dotPos.y });
      gsap.set(ring, { x: ringPos.x, y: ringPos.y });

      requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    // Hover interactions
    const magneticEls = document.querySelectorAll(".magnetic");

    magneticEls.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        gsap.to(ring, {
          scale: 1.8,
          duration: 0.3,
          ease: "power3.out",
        });
      });

      el.addEventListener("mouseleave", () => {
        gsap.to(ring, {
          scale: 1,
          duration: 0.3,
          ease: "power3.out",
        });
      });
    });

    // Click pulse
    window.addEventListener("mousedown", () => {
      gsap.to(ring, {
        scale: 0.7,
        duration: 0.15,
      });
    });

    window.addEventListener("mouseup", () => {
      gsap.to(ring, {
        scale: 1,
        duration: 0.3,
        ease: "elastic.out(1,0.4)",
      });
    });

  }, []);

  return (
    <>
      {/* Outer Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-10 h-10 border border-current mix-blend-difference rounded-full pointer-events-none z-[9999]"
        style={{ transform: "translate(-50%, -50%)" }}
      />

      {/* Inner Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-current mix-blend-difference rounded-full pointer-events-none z-[9999]"
        style={{ transform: "translate(-50%, -50%)" }}
      />
    </>
  );
};

export default MagneticCursor;

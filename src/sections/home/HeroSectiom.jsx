import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
    const sectionRef = useRef(null);
    const headingRef = useRef(null);
    const subTextRef = useRef(null);
    const scrollRef = useRef(null);

    const splitText = (text) => {
        return text.split("").map((char, i) => (
            <span key={i} className="inline-block hero-letter translate-y-full opacity-0">
                {char === " " ? "\u00A0" : char}
            </span>
        ));
    };

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

            // 1. Heading Animation
            tl.to(".hero-letter", {
                y: 0,
                opacity: 1,
                duration: 1.2,
                stagger: 0.015,
            })
            // 2. Subtext Fade & Slide (Starting slightly before heading finishes)
            .to(subTextRef.current, {
                y: 0,
                opacity: 0.8,
                duration: 1,
            }, "-=0.8")
            // 3. Scroll Indicator Fade
            .fromTo(scrollRef.current, 
                { scaleY: 0, opacity: 0 }, 
                { scaleY: 1, opacity: 0.6, duration: 1 }, 
                "-=0.5"
            );

            // Parallax effect on scroll
            gsap.to(headingRef.current, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                },
                y: 100,
                opacity: 0.2,
            });

            // Continuous floating animation for scroll line
            gsap.to(scrollRef.current, {
                y: 20,
                repeat: -1,
                duration: 1.5,
                yoyo: true,
                ease: "sine.inOut"
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative min-h-screen flex items-center pt-32 pb-24 overflow-hidden">
            <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 z-10">
                
                <h1 ref={headingRef} className="font-bold leading-[0.85] tracking-tighter text-[clamp(3rem,12vw,10rem)] uppercase">
                    <div className="overflow-hidden py-2">
                        <div className="hero-line">
                            {splitText("Creative")}
                        </div>
                    </div>
                    <div className="overflow-hidden py-2">
                        <div className="hero-line stroke-text" >
                            {splitText("Developer")}
                        </div>
                    </div>
                </h1>

                <div className="mt-12 md:mt-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <p
                        ref={subTextRef}
                        className="max-w-[450px] text-lg md:text-xl leading-relaxed opacity-0 translate-y-8"
                    >
                        Crafting high-performance digital interfaces where 
                        <span className=""> code meets aesthetics.</span>
                    </p>

                    <div className="hidden md:block text-sm uppercase tracking-widest opacity-40">
                        Based in India <br /> Available for 2026
                    </div>
                </div>
            </div>

            {/* Background Accent (Optional) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] bg-blue-500/10 blur-[120px] rounded-full -z-10" />

            {/* Scroll Indicator */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
                <span className="text-[10px] uppercase tracking-[0.2em] vertical-text opacity-40">Scroll</span>
                <div ref={scrollRef} className="w-[1px] h-16 bg-current origin-top"></div>
            </div>
        </section>
    );
};

export default HeroSection;
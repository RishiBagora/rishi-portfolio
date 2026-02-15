import Lenis from "@studio-freight/lenis";

export const initSmoothScroll = () => {
  const lenis = new Lenis({
    smooth: true,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
};

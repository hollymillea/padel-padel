"use client";

import { useEffect, useRef } from "react";

const clamp = (v) => Math.min(1, Math.max(0, v));
const reduced = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// A court drawn round its contents as you scroll: top line first, then the sides, then the bottom
export function CourtLines({ children }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced()) return;
    let frame = 0;
    el.classList.add("is-live");
    /*
     * The top and bottom lines play on their own (a CSS transition) once that edge is well in view,
     * so they're seen however fast you scroll. The long side lines follow the scroll between them.
     */
    const update = () => {
      frame = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      el.classList.toggle("top-on", r.top < vh * 0.8);
      el.classList.toggle("bottom-on", r.bottom < vh * 0.92);
      el.style.setProperty("--ln-side", clamp((vh * 0.8 - r.top) / Math.max(1, r.height - vh * 0.1)));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={ref} className="court-lines">
      <i aria-hidden="true" className="t" />
      <i aria-hidden="true" className="l" />
      <i aria-hidden="true" className="r" />
      <i aria-hidden="true" className="b" />
      {children}
    </div>
  );
}

// Pins once its bottom reaches the bottom of the screen, so the next section can slide over it
export function StickyBottom({ className, id, children }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const measure = () => {
      const headerHeight = document.querySelector(".hdr")?.offsetHeight || 64;
      el.style.setProperty("--st-top", `${Math.min(headerHeight - 4, window.innerHeight - el.offsetHeight)}px`);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  return (
    <div ref={ref} id={id} className={className}>
      {children}
    </div>
  );
}

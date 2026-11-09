"use client";

import { useEffect, useRef, useState } from "react";
import Menu from "./Menu";
import { BOOK_URL } from "@/data/site";

const HDR = 60; // header height once scrolled
const LOGO_RATIO = 770.04 / 1516.72;
const GAP = 28; // room between the logo and the edge of the section pushing it up

/*
 * The header is the court's top line. At the top of the home page it breaks only for Menu.
 * As you scroll, the big hero logo waits until the next section's top edge reaches it,
 * then rides that edge up into the centre of the header. The line opens up around it,
 * and "Book a court" opens a gap on the right.
 *
 * Progress (0 → 1) is written to the page as the CSS variable --e, and the
 * hero's side lines read --fr-s. Everything else is plain CSS.
 *
 * mode="hero"   the home page, with a #hero-logo-slot and an #st-1 section
 * mode="static" other pages: the header starts finished
 */
export default function Header({ mode = "hero" }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const logoRef = useRef(null);
  const hdrRef = useRef(null);
  const moving = mode === "hero";

  useEffect(() => {
    if (!moving) return;
    const root = document.documentElement;
    const logo = logoRef.current;
    const hdr = hdrRef.current;
    let start = null;
    let frame = 0;

    const logoWidth = () => (window.innerWidth < 900 ? 76 : 84);

    const update = () => {
      frame = 0;
      if (!start) return;
      const y = window.scrollY;
      const lwEnd = logoWidth();
      const to = { x: (window.innerWidth - lwEnd) / 2, y: (HDR - lwEnd * LOGO_RATIO) / 2, w: lwEnd };
      const h0 = start.w * LOGO_RATIO;
      const next = document.getElementById("st-1");
      const edge = next ? next.getBoundingClientRect().top : Infinity;
      const contact = start.y + h0 + GAP;
      const land = to.y + lwEnd * LOGO_RATIO + GAP;
      const e = Math.min(1, Math.max(0, (contact - edge) / (contact - land)));
      const w = start.w + (to.w - start.w) * e;
      const top = e <= 0 ? start.y : e >= 1 ? to.y : edge - GAP - w * LOGO_RATIO;
      const left = start.x + (to.x - start.x) * e;

      logo.style.left = `${left}px`;
      logo.style.top = `${top}px`;
      logo.style.width = `${w}px`;
      logo.classList.add("is-placed");

      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const fr = reduce ? 1 : Math.min(1, Math.max(0, (y - 90) / 300));
      root.style.setProperty("--e", e.toFixed(4));
      root.style.setProperty("--fr-s", fr.toFixed(4));
      hdr.classList.toggle("hdr-ready", e > 0.8);
    };

    const measure = () => {
      const slot = document.getElementById("hero-logo-slot");
      if (!slot) return;
      // The hero is pinned to the top of the screen while we leave it, so the slot's
      // place inside the hero is its place on screen (even if the page loads part-way down)
      const r = slot.getBoundingClientRect();
      start = { x: r.left, y: slot.offsetTop, w: r.width };
      update();
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    // Measure from the top of the page so the start point is the hero's resting place
    const settle = () => requestAnimationFrame(measure);
    if (document.readyState === "complete") settle();
    else window.addEventListener("load", settle, { once: true });
    measure();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
      if (frame) cancelAnimationFrame(frame);
      root.style.removeProperty("--e");
      root.style.removeProperty("--fr-s");
    };
  }, [moving]);

  const staticVars = moving ? undefined : { "--e": 1 };

  return (
    <div style={staticVars}>
      <a
        ref={logoRef}
        href="/"
        aria-label="¡Padel Padel! home"
        className={`hdr-logo${moving ? " is-moving" : ""}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/logo-cream.svg" alt="" width="1517" height="770" />
      </a>

      <header ref={hdrRef} className={`hdr${moving ? "" : " hdr-ready"}`}>
        <div aria-hidden="true" className="hdr-bg" />
        <div aria-hidden="true" className="hdr-spk" />

        {/* The line, with gaps where the items sit */}
        <div aria-hidden="true" className="nl-row nl-line">
          <div className="nl-side">
            <span className="nl-seg nl-end" />
            <span className="navlink nl-ghost">Menu</span>
            <span className="nl-seg" />
          </div>
          <div>
            <span className="nl-logo-gap" />
          </div>
          <div className="nl-side">
            <span className="nl-seg" />
            <span className="nl-book">
              <span className="nl-book-in" />
            </span>
            <span className="nl-seg nl-end" />
          </div>
        </div>

        {/* The items, laid out the same way so they land in the gaps */}
        <nav aria-label="Main" className="nl-row nl-links">
          <div className="nl-side">
            <span className="nl-seg nl-end" />
            <button
              type="button"
              className="navlink"
              aria-haspopup="dialog"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(true)}
            >
              Menu
            </button>
            <span className="nl-seg" />
          </div>
          <div>
            <span className="nl-logo-gap" />
          </div>
          <div className="nl-side">
            <span className="nl-seg" />
            <span className="nl-book">
              <span className="nl-book-in">
                <a href={BOOK_URL} className="btn btn-cream hdr-book">
                  Book<span className="hide-sm">&nbsp;a court</span>
                </a>
              </span>
            </span>
            <span className="nl-seg nl-end" />
          </div>
        </nav>
      </header>

      {menuOpen && <Menu onClose={() => setMenuOpen(false)} />}
    </div>
  );
}

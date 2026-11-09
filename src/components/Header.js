"use client";

import { useEffect, useRef, useState } from "react";
import Menu from "./Menu";
import HomeLink from "./HomeLink";
import { BOOK_URL } from "@/data/site";

const LOGO_RATIO = 770.04 / 1516.72;
const GAP = 28; // room between the logo and the edge of the section pushing it up
const SKY = [109, 140, 161]; // the top edge of the hero photo, as shaded on screen (older iOS only)
const CLAY = [152, 72, 42];

const browserColor = (progress) =>
  "#" + SKY.map((channel, index) =>
    Math.round(channel + (CLAY[index] - channel) * progress).toString(16).padStart(2, "0")
  ).join("");

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
  const trackRef = useRef(null);
  const rideRef = useRef(null);
  const moving = mode === "hero";

  useEffect(() => {
    if (!moving) return;
    const root = document.documentElement;
    const logo = logoRef.current;
    const track = trackRef.current;
    const ride = rideRef.current;
    const hdr = hdrRef.current;
    const theme = document.querySelector('meta[name="theme-color"]');
    const originalTheme = theme?.content;
    const next = document.getElementById("st-1");
    let start = null;
    let to = null;
    let frame = 0;
    let measuredWidth = 0;
    let phone = false;
    // Safari 26+ and Chrome run the ride off the scroll position themselves (CSS scroll-driven
    // animations), so size and position stay in lockstep. Elsewhere, script sets them each frame.
    const cssRide = CSS.supports("animation-timeline", "scroll()");
    root.classList.toggle("ride-css", cssRide);

    /*
     * The riding logo is position: sticky inside a track that ends GAP above #st-1.
     * The browser itself holds it in place and then pushes it up with the section's edge,
     * so it moves in lockstep with the scroll (no lag on iOS).
     */
    const update = () => {
      frame = 0;
      if (!start) return;
      const y = window.scrollY;
      const h0 = start.w * LOGO_RATIO;
      const edge = next ? next.getBoundingClientRect().top : Infinity;
      const contact = start.y + h0 + GAP;
      const land = to.y + to.w * LOGO_RATIO + GAP;
      const e = Math.min(1, Math.max(0, (contact - edge) / (contact - land)));
      const w = start.w + (to.w - start.w) * e;

      ride.classList.add("is-placed");
      // While the hero fills the screen, the page colour matches the photo's bottom edge,
      // so Safari's toolbar fade blends into the photo instead of turning terracotta
      root.classList.toggle("on-hero", e < 1);
      if (!cssRide) {
        ride.style.transform = `translate3d(${(to.x - start.x) * e}px, 0, 0) scale(${w / start.w})`;
        const landed = e >= 1;
        ride.classList.toggle("is-landed", landed);
        logo.classList.toggle("is-landed", landed);
        root.style.setProperty("--e", e.toFixed(4));
      }

      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const fr = reduce ? 1 : Math.min(1, Math.max(0, (y - 90) / 300));
      root.style.setProperty("--fr-s", fr.toFixed(4));
      // Older iOS reads this for its top bar; iOS 26 tints from the page content instead
      const color = browserColor(e);
      root.style.setProperty("--hero-browser-color", color);
      if (theme && !document.querySelector(".menu") && theme.content !== color) {
        theme.content = color;
      }
      hdr.classList.toggle("hdr-ready", e > 0.8);
    };

    const measure = () => {
      const { width, height } = window.screen;
      phone = window.matchMedia("(pointer: coarse)").matches && Math.min(width, height) <= 600;
      measuredWidth = window.innerWidth;
      if (phone) {
        const portrait = window.matchMedia("(orientation: portrait)").matches;
        const screenHeight = portrait ? Math.max(width, height) : Math.min(width, height);
        root.style.setProperty("--phone-screen-height", `${Math.max(screenHeight, window.innerHeight)}px`);
      } else {
        root.style.removeProperty("--phone-screen-height");
      }
      const slot = document.getElementById("hero-logo-slot");
      if (!slot || !next) return;
      // The hero is pinned to the top of the screen, so the slot's place inside the hero
      // is its place on screen (even if the page loads part-way down)
      const r = slot.getBoundingClientRect();
      start = { x: r.left, y: slot.offsetTop, w: r.width };
      // Land exactly where the header's own logo sits, so the hand-over is invisible
      const l = logo.getBoundingClientRect();
      to = { x: l.left, y: l.top, w: l.width };

      const st1Top = next.getBoundingClientRect().top + window.scrollY;
      track.style.height = `${st1Top - GAP}px`;
      if (cssRide) {
        // The hero is pinned, so the section's edge moves at scroll speed:
        // the ride runs between these two scroll positions
        const h0 = start.w * LOGO_RATIO;
        const rideStart = st1Top - (start.y + h0 + GAP);
        const rideEnd = st1Top - (to.y + to.w * LOGO_RATIO + GAP);
        root.style.setProperty("--ride-start", `${rideStart.toFixed(1)}px`);
        root.style.setProperty("--ride-end", `${rideEnd.toFixed(1)}px`);
        root.style.setProperty("--ride-dx", `${(to.x - start.x).toFixed(2)}px`);
        root.style.setProperty("--ride-k", (to.w / start.w).toFixed(5));
      }
      ride.style.top = `${start.y}px`;
      ride.style.marginTop = `${start.y}px`;
      ride.style.marginLeft = `${start.x}px`;
      ride.style.width = `${start.w}px`;
      update();
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    const onResize = () => {
      // Safari expands/collapses its toolbar during scrolling; keep the logo's origin.
      if (phone && window.innerWidth === measuredWidth) return;
      measure();
    };

    // Measure from the top of the page so the start point is the hero's resting place
    const settle = () => requestAnimationFrame(measure);
    if (document.readyState === "complete") settle();
    else window.addEventListener("load", settle, { once: true });
    measure();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (frame) cancelAnimationFrame(frame);
      root.style.removeProperty("--e");
      root.style.removeProperty("--fr-s");
      root.style.removeProperty("--hero-browser-color");
      root.style.removeProperty("--phone-screen-height");
      root.classList.remove("ride-css", "on-hero");
      for (const v of ["--ride-start", "--ride-end", "--ride-dx", "--ride-k"]) root.style.removeProperty(v);
      if (theme && originalTheme) theme.content = originalTheme;
    };
  }, [moving]);

  useEffect(() => {
    const theme = document.querySelector('meta[name="theme-color"]');
    if (theme) {
      theme.content = menuOpen || !moving
        ? "#98482a"
        : document.documentElement.style.getPropertyValue("--hero-browser-color") || "#6d8ca1";
    }
  }, [menuOpen, moving]);

  const staticVars = moving ? undefined : { "--e": 1 };

  return (
    <div style={staticVars}>
      <HomeLink
        ref={logoRef}
        aria-label="¡Padel Padel! home"
        className={`hdr-logo${moving ? " is-moving" : ""}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/logo-cream.svg" alt="" width="1517" height="770" />
      </HomeLink>

      {moving && (
        <div ref={trackRef} className="logo-track">
          <HomeLink ref={rideRef} aria-hidden="true" tabIndex={-1} className="logo-ride">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/logo-cream.svg" alt="" width="1517" height="770" />
          </HomeLink>
        </div>
      )}

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

"use client";

/* eslint-disable @next/next/no-img-element */
import { useCallback, useEffect, useRef, useState } from "react";

// A masonry grid of photos. Tap one to see it full screen; arrows, swipe or the keyboard move between them.
export default function Gallery({ items }) {
  const [open, setOpen] = useState(-1);
  const dialogRef = useRef(null);
  const touchX = useRef(null);

  const show = (i) => setOpen(i);
  const close = useCallback(() => setOpen(-1), []);
  const step = useCallback((d) => setOpen((i) => (i + d + items.length) % items.length), [items.length]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open >= 0 && !dialog.open) {
      dialog.showModal();
      // Focus the viewer, not Close, so no focus ring flashes up on open; Tab still reaches Close
      dialog.focus();
      document.body.style.overflow = "hidden";
    }
    if (open < 0 && dialog.open) dialog.close();
  }, [open]);

  useEffect(() => {
    if (open < 0) return;
    const onKey = (e) => {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, step]);

  const current = open >= 0 ? items[open] : null;

  return (
    <>
      <ul className="gal">
        {items.map((it, i) => (
          <li key={it.src}>
            <button type="button" className="gal-item" onClick={() => show(i)} aria-label={`Open photo: ${it.alt}`}>
              <img src={it.src} alt={it.alt} width={it.w} height={it.h} loading={i < 3 ? "eager" : "lazy"} />
              <span className="mk gal-label">{it.label}</span>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        className="gal-box"
        aria-label="Photo viewer"
        tabIndex={-1}
        onClose={() => {
          document.body.style.overflow = "";
          close();
        }}
        onClick={(e) => e.target === e.currentTarget && close()}
        onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
          touchX.current = null;
        }}
      >
        {current && (
          <>
            <div className="gal-bar">
              <p className="mk">
                {current.label} <span style={{ opacity: 0.6 }}>· {open + 1} / {items.length}</span>
              </p>
              <button type="button" className="navlink gal-close" onClick={close}>
                Close
                <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
                  <g stroke="#F7F2E6" strokeWidth="2">
                    <line x1="1" y1="1" x2="13" y2="13" />
                    <line x1="13" y1="1" x2="1" y2="13" />
                  </g>
                </svg>
              </button>
            </div>
            <img key={current.src} className="gal-big" src={current.src} alt={current.alt} />
            <button type="button" className="gal-nav prev" onClick={() => step(-1)} aria-label="Previous photo">
              ‹
            </button>
            <button type="button" className="gal-nav next" onClick={() => step(1)} aria-label="Next photo">
              ›
            </button>
          </>
        )}
      </dialog>
    </>
  );
}

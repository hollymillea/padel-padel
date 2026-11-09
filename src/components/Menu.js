"use client";

import { useEffect, useRef } from "react";
import { BOOK_URL, menuMain, menuMore, site, socials } from "@/data/site";
import HomeLink from "./HomeLink";

// A full-screen court, lit like the hero. Close and Book sit on the top line.
export default function Menu({ onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (ev) => ev.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div role="dialog" aria-modal="true" aria-label="Menu" className="menu">
      <div aria-hidden="true" className="bgfx patches" />
      <div aria-hidden="true" className="bgfx specks" />
      <div aria-hidden="true" className="flood-hi" />
      <div aria-hidden="true" className="menu-frame" />

      <div className="menu-line" style={{ top: "calc(24px + var(--safe-top))" }}>
        <span className="nl-seg short" />
        <button ref={closeRef} type="button" className="navlink menu-close" onClick={onClose}>
          Close
          <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
            <g stroke="#F7F2E6" strokeWidth="2">
              <line x1="1" y1="1" x2="13" y2="13" />
              <line x1="13" y1="1" x2="1" y2="13" />
            </g>
          </svg>
        </button>
        <span className="nl-seg" />
        <a
          href={BOOK_URL}
          className="btn btn-cream"
          style={{ margin: "0 14px", minHeight: 40, padding: "0 18px", fontSize: 11, letterSpacing: "0.14em" }}
        >
          Book a court
        </a>
        <span className="nl-seg short" />
      </div>

      <div className="menu-line" style={{ bottom: "calc(24px + var(--safe-bottom))" }}>
        <span className="nl-seg short" />
        <p className="mk menu-addr" style={{ padding: "0 13px", whiteSpace: "nowrap" }}>
          {site.addressShort}
        </p>
        <span className="nl-seg" />
        <p className="mk" style={{ padding: "0 13px", whiteSpace: "nowrap" }}>
          {socials.map((s, i) => (
            <span key={s.label}>
              {i > 0 && " · "}
              <a href={s.href}>{s.label}</a>
            </span>
          ))}
        </p>
        <span className="nl-seg short" />
      </div>

      <div className="menu-body">
        <HomeLink className="menu-logo" aria-label="¡Padel Padel! home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/logo-cream.svg" alt="¡Padel Padel!" />
        </HomeLink>
        <ul className="menu-main">
          {menuMain.map((m, i) => (
            <li key={m.label} style={{ "--i": i }}>
              <a href={m.href} onClick={onClose} className="menulink">
                {m.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="menu-side" style={{ "--i": menuMain.length }}>
          <p className="mk" style={{ opacity: 0.8 }}>
            More from the club
          </p>
          <ul className="menu-more">
            {menuMore.map((m) => (
              <li key={m.label}>
                <a href={m.href} onClick={onClose}>
                  {m.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="serif menu-ready" style={{ fontSize: 30, lineHeight: 1.1 }}>
            ¡ Ready to play !
          </p>
        </div>
      </div>
    </div>
  );
}

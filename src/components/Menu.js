"use client";

import { useEffect, useRef } from "react";
import { BOOK_URL, menuMain, menuMore, site, socials } from "@/data/site";
import HomeLink from "./HomeLink";

const CloseIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
    <g stroke="#F7F2E6" strokeWidth="2">
      <line x1="1" y1="1" x2="13" y2="13" />
      <line x1="13" y1="1" x2="1" y2="13" />
    </g>
  </svg>
);

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
      <div aria-hidden="true" className="menu-frame" />

      {/* The top row is the navbar, finished: Close where Menu sits, the logo, then Book */}
      <div className="menu-top" style={{ "--e": 1 }}>
        <div aria-hidden="true" className="nl-row nl-line">
          <div className="nl-side">
            <span className="nl-seg nl-end" />
            <span className="navlink nl-ghost menu-close-ghost">
              Close
              <CloseIcon />
            </span>
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

        <div className="nl-row nl-links">
          <div className="nl-side">
            <span className="nl-seg nl-end" />
            <button ref={closeRef} type="button" className="navlink menu-close" onClick={onClose}>
              Close
              <CloseIcon />
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
        </div>

        <HomeLink className="hdr-logo" aria-label="¡Padel Padel! home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/logo-cream.svg" alt="" width="1517" height="770" />
        </HomeLink>
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

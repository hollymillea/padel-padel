/* eslint-disable @next/next/no-img-element */
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { CourtLines, StickyBottom } from "@/components/ScrollBits";
import Plans from "@/components/Plans";
import { BOOK_URL, offCourt, partners, ticker, week } from "@/data/site";

export const viewport = {
  themeColor: "#6d8ca1",
};

function Ticker() {
  const run = (hidden) => (
    <div className="tick-run" aria-hidden={hidden || undefined}>
      {ticker.map((t) => (
        <span key={t} style={{ display: "contents" }}>
          <span className="tick-i">{t}</span>
          <img className="tick-s" src="/images/emblem-clay.svg" alt="" width="44" height="46" />
        </span>
      ))}
    </div>
  );
  return (
    <div className="ticker" role="note" aria-label={ticker.join(". ") + "."}>
      <div className="tick" aria-hidden="true">
        {run()}
        {run(true)}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Header mode="hero" />

      <main className="clay">
        <div aria-hidden="true" className="bgfx patches" />
        <div aria-hidden="true" className="bgfx specks" />
        <div aria-hidden="true" className="flood-fixed" />

        {/* The hero pins while prices and membership slide up over it */}
        <div className="hero-stack">
          <section id="top" className="hero">
            <img
              className="hero-img"
              src="/images/hero-four-players.jpg"
              alt=""
              width="1800"
              height="1200"
              fetchPriority="high"
            />
            <div aria-hidden="true" className="hero-shade" />
            <span aria-hidden="true" className="hero-side l" />
            <span aria-hidden="true" className="hero-side r" />

            {/* The logo itself is in the header; it starts here and rises into the header as you scroll */}
            <h1 id="hero-logo-slot" className="hero-logo-slot">
              <span className="sr-only">¡Padel Padel!</span>
            </h1>
            <p className="serif hero-title">Ready to play?</p>
            <div className="hero-cta">
              <a href={BOOK_URL} className="btn btn-cream">
                Book a court
              </a>
            </div>
          </section>

          {/* The wrapper casts the shadow; the section clips its floodlight exactly at its own edge */}
          <div className="lift lift-1">
          <div id="st-1" className="st-1">
            <div aria-hidden="true" className="bgfx patches" />
            <div aria-hidden="true" className="bgfx specks" />
            <div aria-hidden="true" className="flood-fixed" />
            <Ticker />

            <section className="book" aria-labelledby="membership">
              <div className="section-head">
                <p className="mk" style={{ opacity: 0.85 }}>
                  Prices and membership
                </p>
                <Reveal as="h2" id="membership" className="serif rv section-title">
                  <span>
                    <em>¡ Join the padel revolution !</em>
                  </span>
                </Reveal>
              </div>

              <Plans />
              <p className="plans-note">
                Whole court £28 / £38 / £48 an hour · <a href="/memberships/">All about membership</a> ·{" "}
                <a href="https://padel-padel.uk/app">Collect points on the loyalty app</a>
              </p>
            </section>
          </div>
          </div>
        </div>

        {/* What's on: cream, with a terracotta court drawn round it as you scroll */}
        <div className="st-2">
          <CourtLines>
            <section id="whats-on" className="whats-on" aria-labelledby="whats-on-title">
              <div className="section-head" style={{ marginBottom: 44 }}>
                <p className="mk">What&apos;s on</p>
                <Reveal as="h2" id="whats-on-title" className="serif rv section-title">
                  <span>
                    Coming up <em>at the club.</em>
                  </span>
                </Reveal>
              </div>
              <Reveal as="ul" className="wlist stg">
                {week.map((w) => (
                  <li key={w.name}>
                    <div className="wday">
                      <span className="serif">{w.day}</span>
                      <small>{w.when}</small>
                    </div>
                    <div>
                      <p className="wname">{w.name}</p>
                      <p className="wdesc">{w.desc}</p>
                    </div>
                    <div className="wimg">
                      <img className="ph" src={w.img} alt={w.alt} loading="lazy" />
                    </div>
                    <a href={w.href} className="btn wbtn">
                      {w.cta}
                    </a>
                  </li>
                ))}
              </Reveal>
              <p className="whats-note">
                Want to host your own?{" "}
                <a href="/corporate-hire/" className="link-serif">
                  Corporate hire and private events
                </a>
              </p>
            </section>
          </CourtLines>
        </div>

        {/* The photos pin, the last court slides over them; both end here so nothing pins over the footer */}
        <div className="off-wrap">
          <StickyBottom id="off-court" className="off-court">
            {offCourt.map((o) => (
              <figure key={o.label}>
                <img className="ph" src={o.img} alt={o.alt} style={{ objectPosition: o.pos }} loading="lazy" />
                <figcaption className="serif">{o.label}</figcaption>
              </figure>
            ))}
          </StickyBottom>

          <div className="lift lift-4">
          <div className="st-4">
            <div aria-hidden="true" className="bgfx patches" />
            <div aria-hidden="true" className="bgfx specks" />
            <div aria-hidden="true" className="flood-fixed" />
            <div className="court">
              <section id="about" className="about-teaser">
                <div className="about-copy">
                  <p className="mk" style={{ opacity: 0.85 }}>
                    About the club
                  </p>
                  <Reveal as="h2" className="serif rv section-title">
                    <span>
                      Two friends.
                      <br />
                      <em>Four courts.</em>
                    </span>
                  </Reveal>
                  <p className="lede">
                    Born in 2024 from a conversation between two school friends who found padel impossible to book
                    in London. They put their life savings into a club of their own in Eltham, where everyone feels
                    welcome, on and off the court.
                  </p>
                  <p className="mk" style={{ marginTop: 24, opacity: 0.85 }}>
                    Duy Le · Joe Bearman · Co-founders
                  </p>
                  <a href="/about/" className="link-serif">
                    Read our story
                  </a>
                </div>
                <div className="about-photo">
                  <img
                    className="ph"
                    src="/images/group.jpg"
                    alt="Members of the club together on court"
                    style={{ objectPosition: "center 62%" }}
                    loading="lazy"
                  />
                </div>
              </section>

              <section className="partners" aria-label="Our partners">
                <div className="partners-row">
                  <p className="mk" style={{ opacity: 0.85, whiteSpace: "nowrap" }}>
                    Our partners
                  </p>
                  <ul>
                    {partners.map((p) => (
                      <li key={p.name}>
                        <img src={p.src} alt={p.name} style={{ height: p.h }} loading="lazy" />
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              <section className="sign-off">
                <Reveal as="h2" className="serif rv">
                  <span>¡ Your serve !</span>
                </Reveal>
                <div className="btns">
                  <a href={BOOK_URL} className="btn btn-cream">
                    Book a court
                  </a>
                  <a href="/memberships/" className="btn btn-outline">
                    Become a member
                  </a>
                </div>
              </section>
            </div>

            {/* Inside the last section so its clay texture runs on without a seam */}
            <Footer />
          </div>
          </div>
        </div>
      </main>
    </>
  );
}

/* eslint-disable @next/next/no-img-element */
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { BOOK_URL, partners } from "@/data/site";

export const metadata = {
  title: "About",
  description:
    "¡Padel Padel! started in 2024 with two school friends who couldn't get a court anywhere in London. So they built a club of their own, in Eltham.",
};

export default function About() {
  return (
    <>
      <Header mode="static" />

      <main className="clay about-page page-top">
        <div aria-hidden="true" className="bgfx patches" style={{ backgroundPosition: "center 30%" }} />
        <div aria-hidden="true" className="bgfx specks" />

        {/* The founders lead the About page */}
        <div className="ab-pad" style={{ paddingTop: 32 }}>
          <section id="founders" className="court ab-court ab-founders">
            <div aria-hidden="true" className="flood-soft" />
            <div className="section-head">
              <p className="mk" style={{ opacity: 0.85 }}>
                About us / The founders
              </p>
              <h1 className="serif">Meet Duy and Joe.</h1>
              <p className="lede founders-intro">
                ¡Padel Padel! started in 2024 with a conversation between two school friends who couldn&apos;t get a
                court anywhere in London. So they built a club of their own, in Eltham.
              </p>
            </div>
            <div className="founders">
              <figure>
                <div className="portrait">
                  <img className="ph" src="/images/founder-duy.jpg" alt="Portrait of Duy Le on court" />
                </div>
                <figcaption>
                  <p className="serif name">Duy Le</p>
                  <p className="mk" style={{ marginTop: 8, opacity: 0.85 }}>
                    Co-founder &amp; Director
                  </p>
                  <p className="bio" style={{ marginTop: 14 }}>
                    Background in project management and e-commerce. Came to padel from tennis and hasn&apos;t looked
                    back.
                  </p>
                </figcaption>
              </figure>
              <figure>
                <div className="portrait">
                  <img
                    className="ph"
                    src="/images/founder-joe.jpg"
                    alt="Portrait of Joe Bearman on court"
                  />
                </div>
                <figcaption>
                  <p className="serif name">Joe Bearman</p>
                  <p className="mk" style={{ marginTop: 8, opacity: 0.85 }}>
                    Co-founder &amp; Director
                  </p>
                  <p className="bio" style={{ marginTop: 14 }}>
                    ACA-qualified accountant who looks after the finances, and plays a lot of padel.
                  </p>
                </figcaption>
              </figure>
            </div>
          </section>
        </div>

        {/* The courts, edge to edge */}
        <figure className="ab-bleed">
          <img className="ph" src="/images/courts.jpg" alt="The four courts at Padel Padel, Eltham" />
        </figure>

        {/* Story */}
        <div className="ab-pad" style={{ paddingTop: 40 }}>
          <section className="court ab-court">
            <div aria-hidden="true" className="flood-soft" />
            <div className="ab-grid">
              <div className="lhs">
                <p className="mk" style={{ opacity: 0.85 }}>
                  Our story
                </p>
                <Reveal as="h2" className="serif rv section-title">
                  <span>From a chat to a club.</span>
                </Reveal>
              </div>
              <div className="rhs body-copy">
                <p>
                  Padel has its roots in Mexico and has become the fastest-growing sport in the world. Our founders
                  saw a gap. It was fun, fast and social, but almost impossible to book in London.
                </p>
                <p>
                  So they put their life savings into it and found their first site in Eltham, South East London. The
                  four outdoor courts are the heart of the club: tournament-grade, with bold metal frames and a warm
                  terracotta surface.
                </p>
                <p>
                  Around them is a bar, a terrace and a calendar of tournaments, DJ nights and members&apos; socials.
                  Our mission is simple: a place where everyone feels welcome.
                </p>
              </div>
            </div>
            <div className="ab-grid">
              <div className="rhs fact">
                <p className="serif">30m+</p>
                <div>
                  <p className="mk">Did you know?</p>
                  <p>Padel has more than 30 million players worldwide.</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* What we're about */}
        <div className="ab-pad">
          <section className="court ab-court">
            <div aria-hidden="true" className="flood-soft" />
            <p className="mk" style={{ opacity: 0.85 }}>
              What we&apos;re about
            </p>
            <div className="values">
              <div>
                <p className="serif">Everyone&apos;s welcome</p>
                <p className="bio" style={{ marginTop: 14 }}>
                  First game or fiftieth, all levels play here. Coaching, socials and leagues meet you where you are.
                </p>
              </div>
              <div>
                <p className="serif">Courts worth playing on</p>
                <p className="bio" style={{ marginTop: 14 }}>
                  Four outdoor, tournament-grade courts with bold metal frames and a warm terracotta surface.
                </p>
              </div>
              <div>
                <p className="serif">More than a game</p>
                <p className="bio" style={{ marginTop: 14 }}>
                  A bar, a sunny terrace and a clubhouse to chill, work and drink in after you play.
                </p>
              </div>
            </div>
            <div className="partners-row" style={{ marginTop: 88 }}>
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
        </div>

        {/* Sign-off */}
        <div className="ab-pad">
          <section className="court ab-sign">
            <div aria-hidden="true" className="flood" />
            <h2 className="serif">Ready to play?</h2>
            <a href={BOOK_URL} className="btn btn-cream">
              Book a court
            </a>
          </section>
        </div>

        <Footer />
      </main>
    </>
  );
}

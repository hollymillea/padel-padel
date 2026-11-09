/* eslint-disable @next/next/no-img-element */
import Header from "./Header";
import Footer from "./Footer";
import Ticker from "./Ticker";
import { BOOK_URL } from "@/data/site";

/*
 * The shell for the club's info pages (memberships, FAQs, gift cards, corporate hire, sponsorships):
 * a court-framed heading with a photo (or other media) beside it, an optional cream ticker,
 * then each <Panel> as its own court, a sign-off and the footer.
 */
export default function InfoPage({ kicker, title, intro, actions, media, ticker, children, signOff = true }) {
  return (
    <>
      <Header mode="static" />

      <main className="clay page-top">
        <div aria-hidden="true" className="bgfx patches" />
        <div aria-hidden="true" className="bgfx specks" />
        <div aria-hidden="true" className="flood-fixed" />

        <div className="ab-pad" style={{ paddingTop: 32 }}>
          <section className={`court ab-court ip-head${media ? " has-media" : ""}`}>
            <div aria-hidden="true" className="flood-soft" />
            <div className="ip-head-copy">
              <p className="mk" style={{ opacity: 0.85 }}>
                {kicker}
              </p>
              <h1 className="serif page-title">{title}</h1>
              {intro && <p className="page-intro">{intro}</p>}
              {actions && <div className="ip-actions">{actions}</div>}
            </div>
            {media && <div className="ip-head-media">{media}</div>}
          </section>
        </div>

        {ticker && (
          <div className="ip-ticker">
            <Ticker items={ticker} />
          </div>
        )}

        {children}

        {signOff && (
          <div className="ab-pad">
            <section className="court ab-sign">
              <div aria-hidden="true" className="flood" />
              <h2 className="serif">Ready to play?</h2>
              <a href={BOOK_URL} className="btn btn-cream">
                Book a court
              </a>
            </section>
          </div>
        )}

        <Footer />
      </main>
    </>
  );
}

// The photo beside an info page's heading
export function HeadPhoto({ src, alt, pos = "center" }) {
  return (
    <div className="ip-photo">
      <img className="ph" src={src} alt={alt} style={{ objectPosition: pos }} />
    </div>
  );
}

// One court-framed section of an info page. tone="cream" makes it a cream court with clay lines.
export function Panel({ kicker, title, children, tone, className = "" }) {
  return (
    <div className="ab-pad">
      <section className={`court ab-court ip-panel${tone === "cream" ? " ip-cream" : ""} ${className}`}>
        {tone !== "cream" && <div aria-hidden="true" className="flood-soft" />}
        {(kicker || title) && (
          <div className="ip-panel-head">
            {kicker && <p className="mk">{kicker}</p>}
            {title && <h2 className="serif section-title">{title}</h2>}
          </div>
        )}
        {children}
      </section>
    </div>
  );
}

// Cards in a grid: an optional photo, a heading, then a line or two. numbered adds big 01, 02…
export function Cards({ items, numbered = false }) {
  return (
    <div className={`ip-cards${numbered ? " is-numbered" : ""}`}>
      {items.map((it) => (
        <div key={it.title} className={`ip-card${it.img ? " has-img" : ""}`}>
          {it.img && (
            <div className="ip-card-img">
              <img className="ph" src={it.img} alt={it.alt || ""} style={{ objectPosition: it.pos || "center" }} loading="lazy" />
            </div>
          )}
          <h3 className="serif">{it.title}</h3>
          <p>{it.body}</p>
        </div>
      ))}
    </div>
  );
}

// Three photos in a row, the middle one dropped a little for rhythm
export function PhotoStrip({ photos }) {
  return (
    <div className="ip-strip">
      {photos.map((p) => (
        <div key={p.src} className="ip-strip-ph">
          <img className="ph" src={p.src} alt={p.alt} style={{ objectPosition: p.pos || "center" }} loading="lazy" />
        </div>
      ))}
    </div>
  );
}

// Questions that open in place. Plain <details>, so they work without script.
export function Faq({ items }) {
  return (
    <div className="faq">
      {items.map((it) => (
        <details key={it.q}>
          <summary>
            <span>{it.q}</span>
            <i aria-hidden="true" />
          </summary>
          <div className="faq-a">{it.a}</div>
        </details>
      ))}
    </div>
  );
}

import Header from "./Header";
import Footer from "./Footer";
import { BOOK_URL } from "@/data/site";

/*
 * The shell for the club's info pages (memberships, FAQs, gift cards, corporate hire, sponsorships):
 * a court-framed heading, then each <Panel> as its own court, then a sign-off and the footer.
 */
export default function InfoPage({ kicker, title, intro, actions, children, signOff = true }) {
  return (
    <>
      <Header mode="static" />

      <main className="clay page-top">
        <div aria-hidden="true" className="bgfx patches" style={{ backgroundPosition: "center 30%" }} />
        <div aria-hidden="true" className="bgfx specks" />

        <div className="ab-pad" style={{ paddingTop: 32 }}>
          <section className="court ab-court ip-head">
            <div aria-hidden="true" className="flood-soft" />
            <p className="mk" style={{ opacity: 0.85 }}>
              {kicker}
            </p>
            <h1 className="serif page-title">{title}</h1>
            {intro && <p className="page-intro">{intro}</p>}
            {actions && <div className="ip-actions">{actions}</div>}
          </section>
        </div>

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

// One court-framed section of an info page
export function Panel({ kicker, title, children, className = "" }) {
  return (
    <div className="ab-pad">
      <section className={`court ab-court ip-panel ${className}`}>
        <div aria-hidden="true" className="flood-soft" />
        {(kicker || title) && (
          <div className="ip-panel-head">
            {kicker && (
              <p className="mk" style={{ opacity: 0.85 }}>
                {kicker}
              </p>
            )}
            {title && <h2 className="serif section-title">{title}</h2>}
          </div>
        )}
        {children}
      </section>
    </div>
  );
}

// Short cards in a grid: a court line on top, a heading, then a line or two
export function Cards({ items }) {
  return (
    <div className="ip-cards">
      {items.map((it) => (
        <div key={it.title} className="ip-card">
          <h3 className="serif">{it.title}</h3>
          <p>{it.body}</p>
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

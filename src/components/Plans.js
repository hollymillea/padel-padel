import Reveal from "./Reveal";
import { BOOK_URL, MEMBERSHIP_URL, plans } from "@/data/site";

// The three price cards: pay & play, monthly and annual. Used on the home page and the memberships page.
export default function Plans() {
  return (
    <Reveal className="stg plans">
      {plans.map((p) => (
        <article key={p.name} className={`pcard${p.featured ? " pcard-hi" : ""}`}>
          <div className="pcard-top">
            <p className="mk">{p.name}</p>
            {p.badge && <span className="mk badge">{p.badge}</span>}
          </div>
          <p>
            <span className="cbig">{p.price}</span>
            <span className="cunit">{p.unit}</span>
          </p>
          <ul className="clist">
            {p.rows.map((r) => (
              <li key={r.label}>
                <span>
                  {r.label}
                  {r.note && <small>{r.note}</small>}
                </span>
                {r.price && <b>{r.price}</b>}
              </li>
            ))}
          </ul>
          <a href={p.member ? MEMBERSHIP_URL : BOOK_URL} className="btn cbtn">
            {p.cta}
          </a>
        </article>
      ))}
    </Reveal>
  );
}

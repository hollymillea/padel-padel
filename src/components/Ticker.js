/* eslint-disable @next/next/no-img-element */
import { ticker as homeTicker } from "@/data/site";

// The cream band of scrolling phrases, split by the club's emblem. Two copies make the loop seamless.
export default function Ticker({ items = homeTicker }) {
  const run = (hidden) => (
    <div className="tick-run" aria-hidden={hidden || undefined}>
      {items.map((t) => (
        <span key={t} style={{ display: "contents" }}>
          <span className="tick-i">{t}</span>
          <img className="tick-s" src="/images/emblem-clay.svg" alt="" width="44" height="46" />
        </span>
      ))}
    </div>
  );
  return (
    <div className="ticker" role="note" aria-label={items.join(". ") + "."}>
      <div className="tick" aria-hidden="true">
        {run()}
        {run(true)}
      </div>
    </div>
  );
}

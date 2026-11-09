import { site, socials } from "@/data/site";
import HomeLink from "./HomeLink";

export default function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="footer-brand">
        <HomeLink aria-label="¡Padel Padel! home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/logo-cream.svg" alt="¡Padel Padel!" />
        </HomeLink>
        <p style={{ opacity: 0.85 }}>{site.address}</p>
      </div>
      <ul className="footer-col">
        <li className="mk">Club</li>
        <li><a href="/#whats-on">What&apos;s on</a></li>
        <li><a href="/#membership">Memberships</a></li>
        <li><a href="/#off-court">The bar</a></li>
        <li><a href="/about/">About</a></li>
        <li><a href="/#footer">Corporate hire</a></li>
        <li><a href="/#footer">Sponsorships</a></li>
        <li><a href="/#footer">Gift cards</a></li>
        <li><a href="/#footer">FAQs</a></li>
      </ul>
      <ul className="footer-col">
        <li className="mk">Follow</li>
        {socials.map((s) => (
          <li key={s.label}>
            <a href={s.href}>{s.label}</a>
          </li>
        ))}
      </ul>
      <p className="footer-legal">
        © {new Date().getFullYear()} {site.company} · <a href="/#footer">Privacy</a> ·{" "}
        <a href="/#footer">Terms</a>
      </p>
    </footer>
  );
}

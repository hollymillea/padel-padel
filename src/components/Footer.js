import { PRIVACY_URL, TERMS_URL, site, socials } from "@/data/site";
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
        <p style={{ opacity: 0.85 }}>
          {site.hours} · <a href={`mailto:${site.email}`}>{site.email}</a>
        </p>
      </div>
      <ul className="footer-col">
        <li className="mk">Club</li>
        <li><a href="/#whats-on">What&apos;s on</a></li>
        <li><a href="/memberships/">Memberships</a></li>
        <li><a href="/#off-court">The bar</a></li>
        <li><a href="/gallery/">Gallery</a></li>
        <li><a href="/about/">About</a></li>
        <li><a href="/corporate-hire/">Corporate hire</a></li>
        <li><a href="/sponsorships/">Sponsorships</a></li>
        <li><a href="/gift-cards/">Gift cards</a></li>
        <li><a href="/faqs/">FAQs</a></li>
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
        © {new Date().getFullYear()} {site.company} · <a href={PRIVACY_URL}>Privacy</a> ·{" "}
        <a href={TERMS_URL}>Terms</a>
      </p>
    </footer>
  );
}

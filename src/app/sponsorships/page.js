/* eslint-disable @next/next/no-img-element */
import InfoPage, { HeadPhoto, Panel, PhotoStrip } from "@/components/InfoPage";
import { site } from "@/data/site";

export const metadata = {
  title: "Sponsorships",
  description:
    "Partner with ¡Padel Padel!: 11,500+ followers, 2M+ social views and 3,500+ visitors a quarter at our Eltham club.",
};

const MAIL = `mailto:${site.email}?subject=${encodeURIComponent("Sponsorship brochure")}`;

const reach = [
  { n: "11,500+", label: "Social followers" },
  { n: "2M+", label: "Social views" },
  { n: "3,500+", label: "Visitors a quarter" },
  { n: "1,800+", label: "Email subscribers" },
  { n: "2.2 hrs", label: "Average visit" },
];

const sponsors = [
  {
    name: "Y1 Sport",
    logo: "/images/partners/y1.png",
    h: 46,
    body: "Rackets, balls and apparel. Members get 10% off with an exclusive code.",
    href: "https://y1sport.com/collections/padel-rackets",
  },
  {
    name: "Hyperice",
    logo: "/images/partners/hyperice.png",
    h: 30,
    body: "Recovery devices to get you back on court faster.",
    href: "https://hyperice.com/en-gb",
  },
  {
    name: "The Blackheath Hospital",
    logo: "/images/partners/blackheath-hospital.png",
    h: 46,
    body: "Orthopaedics, sports injuries, imaging and physio. Members get 10% off a range of services.",
    href: "https://www.circlehealthgroup.co.uk/hospitals/the-blackheath-hospital",
  },
  {
    name: "XOXO Soda",
    logo: "/images/partners/xoxo.png",
    h: 60,
    body: "Prebiotic soda, cold at the bar.",
    href: "https://drinkxoxo.com/",
  },
];

export default function Sponsorships() {
  return (
    <InfoPage
      kicker="Sponsorships"
      title="Make your mark on London."
      intro="Partner with a fast-growing padel brand. More than 3,500 people come through our gates every quarter, and most keep coming back."
      actions={
        <a href={MAIL} className="btn btn-cream">
          Get the brochure
        </a>
      }
      media={<HeadPhoto src="/images/rackets.jpg" alt="A player holding up a Padel Padel racket" pos="center 40%" />}
      ticker={["11,500+ followers", "2M+ social views", "3,500+ visitors a quarter", "1,800+ subscribers"]}
    >
      <Panel kicker="Our reach" title="Seen on court and online." tone="cream">
        <ul className="ip-stats">
          {reach.map((r) => (
            <li key={r.label}>
              <p className="serif">{r.n}</p>
              <p className="mk">{r.label}</p>
            </li>
          ))}
        </ul>
      </Panel>

      <Panel kicker="Who we work with" title="Join our sponsors.">
        <ul className="ip-sponsors">
          {sponsors.map((s) => (
            <li key={s.name}>
              <a href={s.href}>
                <span className="ip-logo">
                  <img src={s.logo} alt={s.name} style={{ height: s.h }} loading="lazy" />
                </span>
                <span className="mk">{s.name}</span>
                <span>{s.body}</span>
              </a>
            </li>
          ))}
        </ul>
      </Panel>

      <Panel kicker="Our community" title="Active, social and back for more.">
        <PhotoStrip
          photos={[
            { src: "/images/group.jpg", alt: "Members together on court in the sun", pos: "center 40%" },
            { src: "/images/rally.jpg", alt: "A player stretching for a low ball", pos: "center 60%" },
            { src: "/images/drinks.jpg", alt: "Two members laughing over drinks courtside", pos: "60% 70%" },
          ]}
        />
        <p className="ip-note">Visitors spend an average of 2.2 hours at the club, and most come back regularly.</p>
      </Panel>

      <Panel kicker="Interested?" title="Let's talk." tone="cream" className="ip-center">
        <p className="page-intro">
          Email <a href={MAIL}>{site.email}</a> and we&apos;ll send you our sponsorship brochure.
        </p>
        <div className="ip-actions">
          <a href={MAIL} className="btn btn-clay">
            Email us
          </a>
        </div>
      </Panel>
    </InfoPage>
  );
}

import InfoPage, { Cards, HeadPhoto, Panel, PhotoStrip } from "@/components/InfoPage";
import { site } from "@/data/site";

export const metadata = {
  title: "Corporate hire",
  description:
    "Team socials, Christmas and summer parties and client days at ¡Padel Padel!, Eltham: courts, coaching, DJs and food, up to the whole club.",
};

const MAIL = `mailto:${site.eventsEmail}?subject=${encodeURIComponent("Event enquiry")}`;

const occasions = [
  {
    title: "Socials & team building",
    body: "Games, coaching and time to socialise, built around what your team wants from the day.",
    img: "/images/group.jpg",
    alt: "A big group together on court",
    pos: "center 35%",
  },
  {
    title: "Christmas & summer parties",
    body: "From a few courts and drinks to hiring the whole club, with DJs, coaching and food vans.",
    img: "/images/terrace.jpg",
    alt: "The terrace with parasols and picnic tables",
    pos: "40% 80%",
  },
  {
    title: "Clients & networking",
    body: "Host clients or your community: play, watch from the terrace and talk over drinks.",
    img: "/images/drinks.jpg",
    alt: "Two people laughing over drinks courtside",
    pos: "60% 70%",
  },
];

const extras = [
  {
    title: "Make it your own",
    body: "Professional coaching, DJs, food vans and bespoke activities. Ask us for ideas.",
  },
  {
    title: "First timers to familiar faces",
    body: "New to padel? We'll teach you. Already hooked? We'll set up games and a tournament.",
  },
  {
    title: "All weather, all year",
    body: "Four courts, an indoor clubhouse and a terrace that's covered and heated in winter.",
  },
];

export default function CorporateHire() {
  return (
    <InfoPage
      kicker="Corporate hire"
      title="Not your average event."
      intro="Team socials, Christmas parties, client days: from a couple of courts to the whole club, we'll build it around you."
      actions={
        <a href={MAIL} className="btn btn-cream">
          Plan your event
        </a>
      }
      media={<HeadPhoto src="/images/hero-four-players.jpg" alt="Four players mid-rally across the net" pos="45% center" />}
      ticker={["Team socials", "Christmas parties", "Summer parties", "Client days", "Full club hire"]}
    >
      <Panel kicker="Occasions" title="What's the occasion?">
        <Cards items={occasions} />
      </Panel>

      <Panel kicker="Tailor your event" title="Yours, your way." tone="cream">
        <Cards items={extras} numbered />
      </Panel>

      <Panel kicker="The club" title="Four courts. One big day out.">
        <PhotoStrip
          photos={[
            { src: "/images/courts.jpg", alt: "The courts in front of the old brick buildings", pos: "center" },
            { src: "/images/circuits.jpg", alt: "A circuits class on mats on court", pos: "center 60%" },
            { src: "/images/rackets.jpg", alt: "A player holding up a Padel Padel racket", pos: "center 40%" },
          ]}
        />
      </Panel>

      <Panel kicker="Get in touch" title="Interested in organising an event?" tone="cream" className="ip-center">
        <p className="page-intro">
          Share your ideas, ask for prices or come and see the club. Email{" "}
          <a href={MAIL}>{site.eventsEmail}</a>.
        </p>
        <div className="ip-actions">
          <a href={MAIL} className="btn btn-clay">
            Email the events team
          </a>
        </div>
      </Panel>
    </InfoPage>
  );
}

import InfoPage, { Cards, Panel } from "@/components/InfoPage";
import Plans from "@/components/Plans";
import { MEMBERSHIP_URL, TERMS_URL } from "@/data/site";

export const metadata = {
  title: "Memberships",
  description:
    "Join ¡Padel Padel! from £30 a month: 20% off courts, booking 14 days ahead, free racket rental and 15% off the bar in Eltham.",
};

const perks = [
  { title: "The cheapest way to play", body: "20% off your share of every court booking, plus discounted club sessions." },
  { title: "Book before the rush", body: "Members book 14 days ahead. Everyone else gets 7." },
  { title: "Exclusive events", body: "Members' socials and nights at the club through the year." },
  { title: "Free cancellations", body: "Change of plans? Cancel up to 24 hours before at no cost." },
  { title: "Free racket rental", body: "Leave yours at home. Rackets are £3.99 a person for everyone else." },
  { title: "Chill, work, drink, eat", body: "15% off food and drink at the bar, on court days and off." },
];

export default function Memberships() {
  return (
    <InfoPage
      kicker="Memberships"
      title="More than a game."
      intro="Play more for less, book before everyone else and make the club your second home. Annual members pay just £25 a month."
      actions={
        <a href={MEMBERSHIP_URL} className="btn btn-cream">
          Join the club
        </a>
      }
    >
      <Panel kicker="Prices" title="Pick your plan.">
        <Plans />
        <p className="ip-note">Founders membership is sold out. Thank you to everyone who joined first.</p>
      </Panel>

      <Panel kicker="What members get" title="Six reasons to join.">
        <Cards items={perks} />
      </Panel>

      <Panel kicker="The small print" title="Simple, no catches.">
        <ul className="ip-list">
          <li>Join and manage your membership in Playtomic.</li>
          <li>Cancel any time in Playtomic. It ends when your current billing period does.</li>
          <li>Changed your mind? You have 14 days after joining to cancel.</li>
          <li>Memberships are personal, so they can&apos;t be shared or transferred.</li>
          <li>We&apos;ll always give you 28 days&apos; notice of any price change.</li>
        </ul>
        <p className="ip-note">
          Full details are in our <a href={TERMS_URL}>terms and conditions</a>.
        </p>
      </Panel>
    </InfoPage>
  );
}

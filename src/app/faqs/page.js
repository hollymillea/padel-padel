import InfoPage, { Faq, Panel } from "@/components/InfoPage";
import { ACADEMY_URL, BOOK_URL, site } from "@/data/site";

export const metadata = {
  title: "FAQs",
  description:
    "Rackets, parking, coaching, booking and prices at ¡Padel Padel! in Eltham, plus how to get in touch. Open daily, 7am to 11pm.",
};

const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Padel+Padel+20B+Well+Hall+Road+Eltham+SE9+6SF";

const faqs = [
  {
    q: "Do I need my own racket and balls?",
    a: (
      <p>
        No. Rackets are £3.99 a person to hire, and free for members. Balls are on sale in the clubhouse.
      </p>
    ),
  },
  {
    q: "Can I park at the club?",
    a: (
      <>
        <p>Parking is very limited and first come, first served, so it&apos;s easier to get here another way:</p>
        <ul>
          <li>
            <b>Train:</b> Eltham station is a three-minute walk.
          </li>
          <li>
            <b>Bus:</b> the Eltham Church and Well Hall Road stops are close by.
          </li>
          <li>
            <b>Bike:</b> there are racks inside the club.
          </li>
        </ul>
      </>
    ),
  },
  {
    q: "I've never played before. Do you offer coaching?",
    a: (
      <p>
        Yes, for every ability. Book a session through the <a href={ACADEMY_URL}>Academy on Playtomic</a>, where
        you&apos;ll also find kids&apos; camps and padel &amp; pilates.
      </p>
    ),
  },
  {
    q: "How do I book a court?",
    a: (
      <p>
        Book on <a href={BOOK_URL}>Playtomic</a>. Walk-ins are welcome too, if a court is free. Collect points as you
        play on our <a href="https://padel-padel.uk/app">rewards app</a>.
      </p>
    ),
  },
  {
    q: "What are your court prices?",
    a: (
      <>
        <p>Per court, per hour (split between four players):</p>
        <ul>
          <li>Super off-peak: £28 (£7 each)</li>
          <li>Off-peak: £38 (£9.50 each)</li>
          <li>On-peak: £48 (£12 each)</li>
        </ul>
        <p>
          <a href="/memberships/">Members</a> get 20% off their share of every booking.
        </p>
      </>
    ),
  },
  {
    q: "Can we hire the whole club?",
    a: (
      <p>
        Yes, for corporate and social groups, with rackets and balls, DJs and catering. See{" "}
        <a href="/corporate-hire/">corporate hire</a> or email{" "}
        <a href={`mailto:${site.eventsEmail}`}>{site.eventsEmail}</a> for prices.
      </p>
    ),
  },
];

export default function Faqs() {
  return (
    <InfoPage
      kicker="FAQs"
      title="Good questions."
      intro="Everything you need to know before your first game. Can't find your answer? Get in touch."
    >
      <Panel>
        <Faq items={faqs} />
      </Panel>

      <Panel kicker="Contact" title="Come and say hello.">
        <div className="ip-contact">
          <div>
            <p className="mk">Email</p>
            <p>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
          </div>
          <div>
            <p className="mk">Opening hours</p>
            <p>{site.hours}</p>
          </div>
          <div>
            <p className="mk">Find us</p>
            <p>
              <a href={MAPS_URL}>{site.address}</a>
            </p>
          </div>
        </div>
      </Panel>
    </InfoPage>
  );
}

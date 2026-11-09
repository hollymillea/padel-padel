import InfoPage, { Faq, Panel } from "@/components/InfoPage";
import { GIFT_CARD_URL, PLAYTOMIC_URL, site } from "@/data/site";

export const metadata = {
  title: "Gift cards",
  description:
    "¡Padel Padel! e-gift cards for court bookings, coaching and events in Eltham. They never expire.",
};

const redeemMail =
  `mailto:${site.email}?subject=${encodeURIComponent("Redeem my gift card")}` +
  `&body=${encodeURIComponent(
    "Name:\nGift card number:\nEmail on my Playtomic account:\nPhone number on my Playtomic account:\n"
  )}`;

const faqs = [
  {
    q: "What can gift cards be used for?",
    a: <p>Court bookings, coaching sessions and events, all through Playtomic and subject to availability.</p>,
  },
  {
    q: "How do I redeem my gift card?",
    a: (
      <p>
        <a href={redeemMail}>Email us</a> your gift card number with the email address and phone number on your
        Playtomic account. We&apos;ll add the credit so you can use it right away.
      </p>
    ),
  },
  {
    q: "Do I need a Playtomic account?",
    a: (
      <p>
        Yes, the credit goes onto your Playtomic account for booking. It&apos;s free and takes a couple of minutes to{" "}
        <a href={PLAYTOMIC_URL}>set one up</a>.
      </p>
    ),
  },
  {
    q: "How long are gift cards valid for?",
    a: <p>They never expire.</p>,
  },
  {
    q: "Can gift cards be refunded or exchanged?",
    a: <p>No. Gift cards can&apos;t be refunded or exchanged for cash.</p>,
  },
  {
    q: "Can I give my gift card to someone else?",
    a: (
      <p>
        Yes, as long as it hasn&apos;t been used. Email us both of your Playtomic email addresses and the gift card
        number.
      </p>
    ),
  },
  {
    q: "What if I don't use the whole balance at once?",
    a: <p>Whatever&apos;s left stays on your Playtomic account for next time.</p>,
  },
];

export default function GiftCards() {
  return (
    <InfoPage
      kicker="Gift cards"
      title="Give the gift of padel."
      intro="E-gift cards for court bookings, coaching and events at the club. Sent straight to their inbox, and they never expire."
      actions={
        <a href={GIFT_CARD_URL} className="btn btn-cream">
          Buy a gift card
        </a>
      }
    >
      <Panel kicker="Lucky enough to have one?" title="Redeem in three steps.">
        <ol className="ip-steps">
          <li>
            <div>
              <b>Get on Playtomic.</b> <a href={PLAYTOMIC_URL}>Create a free account</a> if you don&apos;t have one.
            </div>
          </li>
          <li>
            <div>
              <b>Send us your card.</b> Email the gift card number, plus the email and phone number on your Playtomic
              account.
            </div>
          </li>
          <li>
            <div>
              <b>Book.</b> We add the credit to your account, ready to spend.
            </div>
          </li>
        </ol>
        <div className="ip-actions">
          <a href={redeemMail} className="btn btn-cream">
            Email us your card
          </a>
        </div>
      </Panel>

      <Panel kicker="Questions" title="Good to know.">
        <Faq items={faqs} />
      </Panel>
    </InfoPage>
  );
}

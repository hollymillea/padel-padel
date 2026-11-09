import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import { BOOK_URL, gallery } from "@/data/site";

export const metadata = {
  title: "Gallery",
  description: "Rallies, circuits, drinks on the terrace: life at ¡Padel Padel!, four outdoor courts in Eltham.",
};

export default function GalleryPage() {
  return (
    <>
      <Header mode="static" />

      <main className="clay page-top">
        <div aria-hidden="true" className="bgfx patches" />
        <div aria-hidden="true" className="bgfx specks" />
        <div aria-hidden="true" className="flood-fixed" />

        <div className="ab-pad" style={{ paddingTop: 32 }}>
          <section className="court ab-court gal-court">
            <div aria-hidden="true" className="flood-soft" />
            <div className="section-head">
              <p className="mk" style={{ opacity: 0.85 }}>
                Gallery
              </p>
              <h1 className="serif gal-title">Life at the club.</h1>
              <p className="lede gal-intro">
                Rallies on the clay, circuits in the sun and drinks on the terrace. This is ¡Padel Padel!
              </p>
            </div>
            <Gallery items={gallery} />
          </section>
        </div>

        <div className="ab-pad">
          <section className="court ab-sign">
            <div aria-hidden="true" className="flood" />
            <h2 className="serif">Ready to play?</h2>
            <a href={BOOK_URL} className="btn btn-cream">
              Book a court
            </a>
          </section>
        </div>

        <Footer />
      </main>
    </>
  );
}

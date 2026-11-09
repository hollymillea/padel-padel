import { Barlow_Condensed } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";

// Headings: Barlow Condensed, the club's current headline font
const serif = Barlow_Condensed({
  subsets: ["latin"],
  weight: "900",
  variable: "--font-serif",
  display: "swap",
});

export const metadata = {
  title: { default: site.title, template: `${site.title} — %s` },
  description: site.description,
  icons: { icon: "/images/emblem-clay.svg" },
};

export const viewport = {
  // Safari's bars: the clay as it looks on the page, with its texture and shading, measured
  // from an iPhone screenshot (midway between the page's lighter centre and darker edges)
  themeColor: "#92482b",
  colorScheme: "only light",
  viewportFit: "cover",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB" className={serif.variable}>
      <body>{children}</body>
    </html>
  );
}

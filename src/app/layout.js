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
  themeColor: "#98482A",
  colorScheme: "only light",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB" className={serif.variable}>
      <body>{children}</body>
    </html>
  );
}

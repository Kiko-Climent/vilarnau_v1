import localFont from "next/font/local";
import "./globals.css";

import Menu from "@/components/Menu/Menu";
import PageTransition from "@/components/Page_Transitions/PageTransitions";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Vilarnau Salon",
  description: "Your friseur in Kreuzberg",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Menu />
        {/* <Footer /> */}
        <PageTransition>
        {children}
        </PageTransition>
      </body>
    </html>
  );
}

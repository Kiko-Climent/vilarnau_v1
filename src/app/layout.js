import localFont from "next/font/local";
import "./globals.css";
// import Navbar from "@/components/Navbar/Navbar";
// import Navbar2 from "@/components/Navbar/Navbar2";
import Menu from "@/components/Menu/Menu";


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
        {children}
      </body>
    </html>
  );
}

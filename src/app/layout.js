import Footer from "@/components/Footer";
import "./globals.css";
import Navig from "@/components/Navig";

export const metadata = {
  title: "Shivgarjana Pathak | Laxmi Road cha Buland Aawaj",
  description: "The first international Dhol, Tasha, Dhwaj Pathak. Pune, Sydney, Adelaide, Toronto and Pimpri.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navig />
        {children}
        <Footer />
      </body>
    </html>
  );
}
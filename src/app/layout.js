
import "./globals.css";

export const metadata = {
  title: "Shivgarjana Pathak | Laxmi Road cha Buland Aawaj",
  description: "The first international Dhol, Tasha, Dhwaj Pathak. Pune, Sydney, Adelaide, Toronto and Pimpri.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
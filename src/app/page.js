import Card from "@/components/Card";
import Carousel from "@/components/Carousel";
import Navig from "@/components/Navig";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
     
      <nav className="w-6xl flex">
        <Link href={'/'}>Home</Link>
        <Link href={'/laurels'}>Laurels</Link>
        <Link href={'/gallery'}>Gallery</Link>
        <Link href={'/socialService'}>Social Service</Link>
        <Link href={'/contactUs'}>Contact Us</Link>
        <Link href={'/aboutUs'}>About Us</Link>
      </nav>
      <Carousel />
      <h1>Shivgarjana Pathak</h1>
      <Card />
      <Image
        src="/shivgarjanapathakpunelogo.png"
        width={500}
        height={500}
        alt="The official logo of the First International Dhol Tasha Dhwaj Pathak, Shivgarjana Pathak Pune - 12. Pimpri, Sydney, Adelaide, Toronto."
      />
      <h2>Sydney | Adelaide | Toronto | Pimpri</h2>
      <p>Since: 2002</p>
      <p>24th Year: 2025</p>
    </>
  );
}

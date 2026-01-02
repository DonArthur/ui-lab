import Image from "next/image";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-[90%] mx-auto min-h-screen">
      <Navbar />
      <header data-aos="zoom-in" className="my-14 ml-12 md:mt-24 mr-0 md:mb-48 md:ml-28 md:text-left">
        <h1 className="text-white text-3xl md:text-5xl">UI & UX LAB</h1>
        <p className="text-white text-base font-light mt-2.5 w-[90%] md:w-[60%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat obcaecati dolorum impedit fuga aut repellendus voluptates eligendi libero expedita, velit modi! Vel molestiae atque facilis cupiditate libero, culpa consequuntur sed.</p>
      </header>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
        <Link href="/loader">
          <Image data-aos="zoom-in" src="/images/nextjs.jpg" alt="project" width={800} height={500} />
        </Link>
        <Image data-aos="zoom-in" src="/images/nextjs.jpg" alt="project" width={800} height={500} />
        <Image data-aos="zoom-in" src="/images/nextjs.jpg" alt="project" width={800} height={500} />
        <Image data-aos="zoom-in" src="/images/nextjs.jpg" alt="project" width={800} height={500} />
      </div>
      <Footer />
    </div>
  );
}

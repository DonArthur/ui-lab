import Image from "next/image";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

export default function Home() {
  return (
    <div className="w-[90%] mx-auto">
      <Navbar />
      <header className="mt-24 mr-0 mb-48 ml-28">
        <h1 className="text-white text-5xl">UI & UX LAB</h1>
        <p className="text-white text-base font-light mt-2.5 w-[60%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat obcaecati dolorum impedit fuga aut repellendus voluptates eligendi libero expedita, velit modi! Vel molestiae atque facilis cupiditate libero, culpa consequuntur sed.</p>
      </header>
      <div className="w-full grid grid-cols-2 gap-8 mb-24">
        <Image src="/images/nextjs.jpg" alt="project" width={800} height={500} />
        <Image src="/images/nextjs.jpg" alt="project" width={800} height={500} />
        <Image src="/images/nextjs.jpg" alt="project" width={800} height={500} />
        <Image src="/images/nextjs.jpg" alt="project" width={800} height={500} />
      </div>
      <Footer />
    </div>
  );
}

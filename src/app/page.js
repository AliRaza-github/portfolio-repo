import Header from "@/components/header/Header";
import Navbar from "@/components/navbar/Navbar";
import About from "../components/about/About"
import Skills from "@/components/skills/Skills";
import Exp from "@/components/exp/Exp";
import Work from "@/components/work/Work";
import Footer from "@/components/footer/Footer";
import ScrollTopButton from "@/components/scrolltop/ScrollTopButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Exp />
      <Work />
      <Footer />
      <ScrollTopButton />
    </>
  );
}

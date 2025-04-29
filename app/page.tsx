import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Project";
import Experience from "@/components/Experience";
import TechStack from "@/components/TechStack";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kshitij | Portfolio</title>
      </Head>
      <Header />
      <main className="pt-16"> {/* Padding for sticky header */}
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Experience />
        <Footer />
      </main>
    </>
  );
}

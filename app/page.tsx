import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Project";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <>
      <Head>
        <title>Rohit Chand | Portfolio</title>
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

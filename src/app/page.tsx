import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#121212] min-h-screen">
      <section className="relative w-full">
        <ScrollyCanvas />
        <Overlay />
      </section>
      <Projects />
      <Footer />
    </main>
  );
}

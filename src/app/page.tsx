import { Hero } from "@/components/Hero";
import { BentoGrid } from "@/components/BentoGrid";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";

export default function Home() {
    return (
        <main className="bg-cream min-h-screen">
            <Hero />
            <BentoGrid />
            <About />
            <Footer />
        </main>
    );
}

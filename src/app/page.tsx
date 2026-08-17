import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Footer } from "@/components/Footer";

export default function Home() {
    return (
        <main className="bg-white min-h-screen">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Footer />
        </main>
    );
}
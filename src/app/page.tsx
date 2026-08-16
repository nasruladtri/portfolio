import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Footer } from "@/components/Footer";

export default function Home() {
    return (
        <main className="bg-white min-h-screen">
            <Hero />
            <About />
            <Projects />
            <Footer />
        </main>
    );
}
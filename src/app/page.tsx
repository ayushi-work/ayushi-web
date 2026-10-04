import { Navbar, Footer } from "@/components/chrome";
import { Hero, About, Skills, Experience, Projects, Github, Process } from "@/components/devops";
import { Notes, Playground, Watching, Contact } from "@/components/creative";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="mx-auto max-w-3xl px-5">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Github />
        <Process />
        <Notes />
        <Playground />
        <Watching />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

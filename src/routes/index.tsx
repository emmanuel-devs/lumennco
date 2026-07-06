import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Toaster } from "@/components/ui/sonner";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Clients } from "@/components/site/Clients";
import { About } from "@/components/site/About";
import { Work } from "@/components/site/Work";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { VideoModal } from "@/components/site/VideoModal";
import { projects, type Project } from "@/data/projects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lumen & Co. — Film, Television & Branded Content Studio" },
      {
        name: "description",
        content:
          "Lumen & Co. is a full-service production studio crafting unscripted series, documentaries, live events, and branded films for networks and brands.",
      },
      { property: "og:title", content: "Lumen & Co. — Cinematic Production Studio" },
      {
        property: "og:description",
        content:
          "Unscripted series, documentaries, live productions, and branded films. Selected work and a full demo reel.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [active, setActive] = useState<Project | null>(null);
  const openReel = () => setActive(projects[0]);
  return (
    <div className="min-h-screen bg-background text-ink">
      <Nav onReel={openReel} />
      <main>
        <Hero onReel={openReel} />
        <Clients />
        <About />
        <Work onOpen={setActive} />
        <Contact />
      </main>
      <Footer />
      <VideoModal project={active} onClose={() => setActive(null)} />
      <Toaster theme="dark" />
    </div>
  );
}

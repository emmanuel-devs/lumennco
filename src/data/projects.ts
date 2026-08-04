import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import work5 from "@/assets/work-5.jpg";
import work6 from "@/assets/work-6.jpg";

export type Project = {
  id: string;
  title: string;
  client: string;
  category: string;
  year: string;
  image: string;
  /** Vimeo/YouTube embed URL, e.g. https://player.vimeo.com/video/123 */
  videoUrl: string;
  description: string;
  /** Case-study fields */
  location: string;
  runtime: string;
  services: string[];
  challenge: string;
  approach: string;
  outcome: string;
  credits: { role: string; name: string }[];
  gallery: string[];
};

export const projects: Project[] = [
  {
    id: "signal-fire",
    title: "Signal Fire",
    client: "Discovery",
    category: "Unscripted Series",
    year: "2025",
    image: work1,
    videoUrl: "https://player.vimeo.com/video/76979871",
    description:
      "An 8-part unscripted series following wildland firefighters through a record-breaking season.",
    location: "Colorado · Montana · Idaho",
    runtime: "8 × 44 min",
    services: ["Development", "Field Production", "Post & Finishing", "Sound Mix"],
    challenge:
      "Cover an unpredictable fire season across three states with crews that had to move within hours — without ever slowing the people we were filming.",
    approach:
      "Two lightweight two-person units on permanent standby, a single-camera vérité grammar, and a post pipeline that ingested and assembled dailies overnight.",
    outcome:
      "Highest-rated new unscripted launch of the year for the network, renewed for a second season before the finale aired.",
    credits: [
      { role: "Director", name: "M. Okonjo" },
      { role: "Showrunner", name: "R. Vance" },
      { role: "DP", name: "T. Alvarez" },
      { role: "Editor", name: "J. Lindqvist" },
    ],
    gallery: [work1, work5, work2],
  },
  {
    id: "high-country",
    title: "High Country",
    client: "National Geographic",
    category: "Documentary Feature",
    year: "2025",
    image: work2,
    videoUrl: "https://player.vimeo.com/video/76979871",
    description:
      "A feature-length documentary tracing a lone photographer's year in the Rockies.",
    location: "Rocky Mountain National Park",
    runtime: "96 min",
    services: ["Development", "Production", "Colour", "Original Score"],
    challenge:
      "Tell a year-long solitary story with almost no dialogue, and make silence feel like momentum rather than absence.",
    approach:
      "Four seasonal shoots on long lenses, a score written against picture from the first assembly, and a colour pass built around natural light only.",
    outcome:
      "Festival premiere in competition, acquired for global streaming within six weeks.",
    credits: [
      { role: "Director", name: "L. Bergström" },
      { role: "DP", name: "T. Alvarez" },
      { role: "Composer", name: "A. Nakamura" },
      { role: "Colourist", name: "S. Idris" },
    ],
    gallery: [work2, work6, work1],
  },
  {
    id: "on-the-line",
    title: "On the Line",
    client: "Food Network",
    category: "Culinary Series",
    year: "2024",
    image: work3,
    videoUrl: "https://player.vimeo.com/video/76979871",
    description:
      "Behind the pass with the chefs shaping America's next great restaurants.",
    location: "New York · Charleston · Portland",
    runtime: "6 × 30 min",
    services: ["Format Design", "Multi-cam Production", "Post & Graphics"],
    challenge:
      "Shoot inside working kitchens during live service without adding a single second to a ticket time.",
    approach:
      "Pre-rigged four-camera kitchen packages, radio-only comms, and a shooting plan built entirely around the service clock.",
    outcome:
      "Series became the network's top-performing culinary launch on streaming.",
    credits: [
      { role: "Director", name: "P. Achebe" },
      { role: "Producer", name: "N. Ferreira" },
      { role: "DP", name: "K. Moreau" },
      { role: "Editor", name: "D. Whitlock" },
    ],
    gallery: [work3, work4, work5],
  },
  {
    id: "amplified",
    title: "Amplified",
    client: "Live Nation",
    category: "Live Production",
    year: "2024",
    image: work4,
    videoUrl: "https://player.vimeo.com/video/76979871",
    description:
      "Multi-cam live capture and broadcast direction for a national headline tour.",
    location: "12-city North American tour",
    runtime: "Live broadcast + 78 min cut",
    services: ["Broadcast Direction", "12-cam Capture", "Live Sound", "Same-day Edit"],
    challenge:
      "Deliver a broadcast-grade cut of a show that changed set list, staging, and lighting nearly every night.",
    approach:
      "A travelling twelve-camera package, a rehearsed cutting script rebuilt each afternoon, and same-day edits turned over before load-out.",
    outcome:
      "Over four million concurrent viewers on the streamed finale night.",
    credits: [
      { role: "Broadcast Director", name: "R. Vance" },
      { role: "Technical Director", name: "H. Oyelaran" },
      { role: "Audio Lead", name: "C. Duarte" },
      { role: "Editor", name: "J. Lindqvist" },
    ],
    gallery: [work4, work3, work6],
  },
  {
    id: "kickoff",
    title: "Kickoff",
    client: "ESPN Films",
    category: "Sports Documentary",
    year: "2024",
    image: work5,
    videoUrl: "https://player.vimeo.com/video/76979871",
    description:
      "An intimate portrait of a rookie season told through the athlete's own footage.",
    location: "Kansas City · Miami",
    runtime: "74 min",
    services: ["Development", "Production", "Archive & Clearance", "Post"],
    challenge:
      "Build a feature-quality film around self-shot phone footage without ever letting the grade give it away.",
    approach:
      "A matched cinema look for interviews, a restoration pass on every self-shot clip, and a structure that let the athlete narrate his own year.",
    outcome:
      "Regional Emmy for editing; the most-watched short-form doc on the platform that quarter.",
    credits: [
      { role: "Director", name: "M. Okonjo" },
      { role: "Producer", name: "N. Ferreira" },
      { role: "Editor", name: "D. Whitlock" },
      { role: "Colourist", name: "S. Idris" },
    ],
    gallery: [work5, work1, work4],
  },
  {
    id: "north-star",
    title: "North Star",
    client: "Patagonia",
    category: "Branded Content",
    year: "2023",
    image: work6,
    videoUrl: "https://player.vimeo.com/video/76979871",
    description:
      "A brand film celebrating five athletes and the wild places that made them.",
    location: "Patagonia · Alaska · Nepal",
    runtime: "9 min + 6 cutdowns",
    services: ["Concept", "Global Production", "Post", "Social Cutdowns"],
    challenge:
      "Shoot five athletes on three continents in a single season and still deliver one film that felt authored, not assembled.",
    approach:
      "One director and one DP travelling to every location, a shared shot grammar agreed up front, and cutdowns designed during the edit rather than after it.",
    outcome:
      "The brand's most-shared film to date, with the social cutdowns outperforming paid benchmarks by 3×.",
    credits: [
      { role: "Director", name: "L. Bergström" },
      { role: "DP", name: "K. Moreau" },
      { role: "Producer", name: "P. Achebe" },
      { role: "Sound", name: "C. Duarte" },
    ],
    gallery: [work6, work2, work3],
  },
];

export function getProject(id: string) {
  return projects.find((p) => p.id === id);
}

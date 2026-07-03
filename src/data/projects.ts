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
  },
];

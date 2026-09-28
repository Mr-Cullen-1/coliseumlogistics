import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Coliseum Logistics School",
    short_name: "Coliseum Logistics",
    description:
      "Practical U.S. logistics training with real office experience, industry-focused workflows, expert masterclasses and interview preparation.",
    start_url: "/",
    display: "standalone",
    background_color: "#0D1114",
    theme_color: "#0D1114",
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}

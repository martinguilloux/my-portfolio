import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://martinguilloux.com",
      lastModified: new Date(),
    },
    {
      url: "https://martinguilloux.com/films",
      lastModified: new Date(),
    },
    {
      url: "https://martinguilloux.com/photography",
      lastModified: new Date(),
    },
    {
      url: "https://martinguilloux.com/contact",
      lastModified: new Date(),
    },
    {
      url: "https://martinguilloux.com/project-1",
      lastModified: new Date(),
    },
    {
      url: "https://martinguilloux.com/project-2",
      lastModified: new Date(),
    },
    {
      url: "https://martinguilloux.com/project-3",
      lastModified: new Date(),
    },
  ];
}
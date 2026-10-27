import avatar from "../assets/avatar.png";

// Edit this file to update the content shown
export const site = {
  name: "June",
  displayName: "june",
  username: "@74117",
  avatar,
  subtitle: "",
  github: "https://github.com/74117",
  about:
    "webdev / reverse engineering",
  socials: [
    { label: "GitHub", href: "https://github.com/74117", icon: "fab fa-github" },
    { label: "Twitter/X", href: "https://twitter.com/cutefag137", icon: "fab fa-twitter" },
    { label: "Discord", href: "https://discord.com/users/693514744308695113", icon: "fab fa-discord" },
    { label: "Steam", href: "https://steamcommunity.com/profiles/76561199397549660/", icon: "fab fa-steam" },
  ],
  skills: ["C++", "TypeScript", "JavaScript", "Java", "Win32 API", "UI/UX"],
  projects: [
    {
      number: "01",
      name: "arda.garden",
      href: null,
      icon: "https://upload.wikimedia.org/wikipedia/commons/4/48/Team_Fortress_2_style_logo.svg",
      description: "TF2 movement helper — pixelsurf calculator, texturebug",
      status: "Inactive",
      tags: ["C++", "TF2", "Game Tools"],
      featured: false,
    },
    {
      number: "02",
      name: "rhyhook",
      href: null,
      icon: "https://cdn.simpleicons.org/osu/ffffff",
      description: "Helper for osu!lazer, supports mania and standard",
      status: "Alpha",
      tags: ["Game Tools", "osu!mania", "osu!standard"],
      featured: true,
    },
  ],
};

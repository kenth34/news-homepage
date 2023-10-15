import { imageRetroPcs, imageGamingGrowth, imageTopLaptops } from "../assets/images";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#new", label: "New" },
  { href: "#popular", label: "Popular" },
  { href: "#trending", label: "Trending" },
  { href:"#categories", label: "Categories" },
];

export const topNews = [
  {
    imgUrl : imageRetroPcs,
    name :"Reviving Retro PCs",
    desc: "What happens when old Pcs are given Modern Upgrades?",
  },
  {
    imgUrl : imageGamingGrowth,
    name :"The Growth of Gaming",
    desc: "How the pandemic has sparked fresh opportunities."
  },
  {
    imgUrl: imageTopLaptops,
    name : "Top 10 Laptos of 2022",
    desc: "Our best picks for various needs and budgets."
    
  }
]

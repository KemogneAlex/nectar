const navLinks = [
  {
    id: "cocktails",
    title: "Cocktails",
  },
  {
    id: "about",
    title: "À propos",
  },
  {
    id: "work",
    title: "L'art",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const cocktailLists = [
  {
    name: "Chapel Hill Shiraz",
    country: "AU",
    detail: "Battle",
    price: "10 €",
  },
  {
    name: "Caten Malbee",
    country: "AU",
    detail: "Battle",
    price: "49 €",
  },
  {
    name: "Rhino Pale Ale",
    country: "CA",
    detail: "750 ml",
    price: "20 €",
  },
  {
    name: "Irish Guinness",
    country: "IE",
    detail: "600 ml",
    price: "29 €",
  },
];

const mockTailLists = [
  {
    name: "Tropical Bloom",
    country: "US",
    detail: "Battle",
    price: "10 €",
  },
  {
    name: "Passionfruit Mint",
    country: "US",
    detail: "Battle",
    price: "49 €",
  },
  {
    name: "Citrus Glow",
    country: "CA",
    detail: "750 ml",
    price: "20 €",
  },
  {
    name: "Lavender Fizz",
    country: "IE",
    detail: "600 ml",
    price: "29 €",
  },
];

const profileLists = [
  {
    imgPath: "/images/profile1.png",
  },
  {
    imgPath: "/images/profile2.png",
  },
  {
    imgPath: "/images/profile3.png",
  },
  {
    imgPath: "/images/profile4.png",
  },
];

const featureLists = [
  "Mélanges parfaitement équilibrés",
  "Garnis à la perfection",
  "Glacé à chaque fois",
  "Secoué et remué avec expertise",
];

const goodLists = [
  "Ingrédients soigneusement sélectionnés",
  "Techniques signature",
  "L'art du barman en action",
  "Saveurs fraîchement écrasées",
];

const storeInfo = {
  heading: "Où nous trouver",
  address: "123, Avenue des Champs-Élysées, 75008 Paris, France",
  contact: {
    phone: "+33 1 23 45 67 89",
    email: "bonjour@nectardor.com",
  },
};

const openingHours = [
  { day: "Lun–Jeu", time: "11h00 – 00h00" },
  { day: "Ven", time: "11h00 – 02h00" },
  { day: "Sam", time: "09h00 – 02h00" },
  { day: "Dim", time: "09h00 – 01h00" },
];

const socials = [
  {
    name: "Instagram",
    icon: "/images/insta.png",
    url: "#",
  },
  {
    name: "X (Twitter)",
    icon: "/images/x.png",
    url: "#",
  },
  {
    name: "Facebook",
    icon: "/images/fb.png",
    url: "#",
  },
];

const allCocktails = [
  {
    id: 1,
    name: "Mojito Classique",
    image: "/images/drink1.png",
    description:
      "Préparé avec du rhum, du jus de citron vert et du sucre de canne, le Mojito est facile à réaliser et plein de caractère. Ajoutez une touche de menthe fraîche pour un rafraîchissement parfait les soirs d'été.",
  },
  {
    id: 2,
    name: "Mojito Framboise",
    image: "/images/drink2.png",
    title: "Un Classique Pétillant Qui ne Déçoit Jamais",
    description:
      "Le Mojito est un classique qui équilibre parfaitement le citron vert acidulé, le rhum doux et une touche de sucre. Secoué, glacé ou sur glace, il est toujours frais et rafraîchissant.",
  },
  {
    id: 3,
    name: "Brise Violette",
    image: "/images/drink3.png",
    description:
      "Préparé avec de la crème de violette, du jus de citron et du gin, ce cocktail est facile à réaliser et plein de caractère. Sa teinte violette en fait une boisson parfaite pour les soirées d'été.",
  },
  {
    id: 4,
    name: "Mojito Curaçao",
    image: "/images/drink4.png",
    title: "Élaboré avec Soin, Versé avec Amour",
    description:
      "Chaque cocktail est préparé avec des ingrédients frais et une passion pour la perfection, que vous célébriez ou que vous vous détendiez simplement.",
  },
];

export {
  navLinks,
  cocktailLists,
  mockTailLists,
  profileLists,
  featureLists,
  goodLists,
  openingHours,
  storeInfo,
  socials,
  allCocktails,
};

export type MenuItem = {
  name: string;
  price: number;
  description?: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  items: MenuItem[];
};

export const menuData: MenuCategory[] = [
  {
    id: "coffee",
    title: "Coffee",
    items: [
      { name: "Espresso", price: 3.75 },
      { name: "Americano", price: 4.25 },
      { name: "Cappuccino", price: 5.25 },
      { name: "Flat White", price: 5.50 },
      { name: "Cafe Latte", price: 5.50 },
      { name: "Spanish Latte", price: 6.50, description: "Double espresso, condensed milk, cold cream." },
      { name: "Mocha", price: 6.25 },
    ],
  },
  {
    id: "cold-crafted",
    title: "Cold & Crafted",
    items: [
      { name: "Classic Cold Brew", price: 5.50 },
      { name: "Sea Salt Cold Brew", price: 6.75, description: "Slow-steeped cold brew finished with savory-sweet sea salt foam." },
      { name: "Caramel Cold Brew", price: 6.25 },
      { name: "Iced Spanish Latte", price: 6.75 },
      { name: "Iced Mocha", price: 6.50 },
      { name: "Matcha Cloud", price: 7.00 },
      { name: "Peach Iced Tea", price: 5.50 },
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    items: [
      { name: "Burnt Basque Cheesecake", price: 9.00, description: "Deeply caramelized top, soft custard centre." },
      { name: "Classic Tiramisu", price: 8.50 },
      { name: "Dark Chocolate Tart", price: 8.00 },
      { name: "Pistachio Cheesecake", price: 9.50 },
      { name: "Affogato", price: 6.50 },
    ],
  },
  {
    id: "bakes-bites",
    title: "Bakes & Bites",
    items: [
      { name: "Butter Croissant", price: 4.50 },
      { name: "Pistachio Croissant", price: 6.00, description: "Buttery laminated pastry filled with roasted pistachio cream." },
      { name: "Pain au Chocolat", price: 5.25 },
      { name: "Garlic Cream Cheese Bagel", price: 6.50 },
      { name: "Pesto & Mozzarella Sandwich", price: 8.50 },
      { name: "Truffle Mushroom Toast", price: 9.00 },
    ],
  },
];

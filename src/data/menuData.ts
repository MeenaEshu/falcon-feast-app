export interface FoodItem {
  id: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  category: "starters" | "main-course" | "desserts" | "beverages";
  isVeg: boolean;
  imageUrl: string;
}

export const menuData: FoodItem[] = [
  // Starters
  {
    id: "1",
    name: "Caesar Salad",
    description: "Fresh romaine lettuce, parmesan cheese, croutons, and our signature Caesar dressing",
    price: 12.99,
    rating: 4.5,
    category: "starters",
    isVeg: true,
    imageUrl: "/src/assets/caesar-salad.jpg"
  },
  {
    id: "2", 
    name: "Chicken Wings",
    description: "Spicy buffalo wings served with blue cheese dip and celery sticks",
    price: 15.99,
    rating: 4.7,
    category: "starters",
    isVeg: false,
    imageUrl: "/placeholder.svg"
  },
  {
    id: "3",
    name: "Garlic Bread",
    description: "Freshly baked bread with garlic butter and herbs",
    price: 8.99,
    rating: 4.3,
    category: "starters",
    isVeg: true,
    imageUrl: "/placeholder.svg"
  },

  // Main Course
  {
    id: "4",
    name: "Chicken Biryani",
    description: "Aromatic basmati rice cooked with tender chicken, spices, and herbs",
    price: 18.99,
    rating: 4.8,
    category: "main-course",
    isVeg: false,
    imageUrl: "/src/assets/biryani.jpg"
  },
  {
    id: "5",
    name: "Margherita Pizza",
    description: "Classic pizza with fresh mozzarella, tomato sauce, and basil",
    price: 16.99,
    rating: 4.6,
    category: "main-course",
    isVeg: true,
    imageUrl: "/placeholder.svg"
  },
  {
    id: "6",
    name: "Grilled Salmon",
    description: "Fresh Atlantic salmon grilled to perfection with lemon butter sauce",
    price: 24.99,
    rating: 4.9,
    category: "main-course",
    isVeg: false,
    imageUrl: "/placeholder.svg"
  },

  // Desserts
  {
    id: "7",
    name: "Chocolate Brownie",
    description: "Rich chocolate brownie served with vanilla ice cream and chocolate sauce",
    price: 9.99,
    rating: 4.5,
    category: "desserts",
    isVeg: true,
    imageUrl: "/src/assets/chocolate-brownie.jpg"
  },
  {
    id: "8",
    name: "Cheesecake",
    description: "New York style cheesecake with berry compote",
    price: 11.99,
    rating: 4.7,
    category: "desserts",
    isVeg: true,
    imageUrl: "/placeholder.svg"
  },

  // Beverages
  {
    id: "9",
    name: "Fresh Lemonade",
    description: "Freshly squeezed lemon juice with mint and soda",
    price: 5.99,
    rating: 4.4,
    category: "beverages",
    isVeg: true,
    imageUrl: "/placeholder.svg"
  },
  {
    id: "10",
    name: "Iced Coffee",
    description: "Cold brew coffee served with ice and your choice of milk",
    price: 4.99,
    rating: 4.6,
    category: "beverages",
    isVeg: true,
    imageUrl: "/placeholder.svg"
  }
];

export const categories = [
  { id: "all", name: "All Items", count: menuData.length },
  { id: "starters", name: "Starters", count: menuData.filter(item => item.category === "starters").length },
  { id: "main-course", name: "Main Course", count: menuData.filter(item => item.category === "main-course").length },
  { id: "desserts", name: "Desserts", count: menuData.filter(item => item.category === "desserts").length },
  { id: "beverages", name: "Beverages", count: menuData.filter(item => item.category === "beverages").length }
];
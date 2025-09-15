import { Star, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface FoodItem {
  id: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  category: string;
  isVeg: boolean;
  imageUrl: string;
}

interface FoodCardProps {
  item: FoodItem;
  onAddToCart: (item: FoodItem) => void;
}

const FoodCard = ({ item, onAddToCart }: FoodCardProps) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < Math.floor(rating)
            ? "text-yellow-400 fill-current"
            : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="food-card group">
      {/* Food Image */}
      <div className="relative overflow-hidden rounded-lg mb-4">
        <img
          src={item.imageUrl}
          alt={item.name}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3">
          <Badge 
            className={item.isVeg ? "category-badge-veg" : "category-badge-nonveg"}
          >
            {item.isVeg ? "Veg" : "Non-Veg"}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-3">
        <div>
          <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
            {item.name}
          </h3>
          <p className="text-muted-foreground text-sm line-clamp-2">
            {item.description}
          </p>
        </div>

        {/* Rating */}
        <div className="flex items-center space-x-2">
          <div className="flex">
            {renderStars(item.rating)}
          </div>
          <span className="text-sm text-muted-foreground">
            ({item.rating})
          </span>
        </div>

        {/* Price & Add to Cart */}
        <div className="flex items-center justify-between pt-2">
          <div>
            <span className="text-2xl font-bold text-primary">
              ${item.price.toFixed(2)}
            </span>
          </div>
          <Button
            onClick={() => onAddToCart(item)}
            className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group-hover:scale-105"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
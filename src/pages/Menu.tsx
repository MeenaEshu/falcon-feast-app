import { useState, useMemo } from "react";
import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import FoodCard from "@/components/FoodCard";
import { menuData, categories, FoodItem } from "@/data/menuData";
import { useCart } from "@/App";
import { useToast } from "@/hooks/use-toast";

const Menu = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [dietFilter, setDietFilter] = useState<"all" | "veg" | "non-veg">("all");
  const { addToCart } = useCart();
  const { toast } = useToast();

  const filteredItems = useMemo(() => {
    let filtered = menuData;

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }

    // Filter by diet preference
    if (dietFilter === "veg") {
      filtered = filtered.filter(item => item.isVeg);
    } else if (dietFilter === "non-veg") {
      filtered = filtered.filter(item => !item.isVeg);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  }, [searchTerm, selectedCategory, dietFilter]);

  const handleAddToCart = (item: FoodItem) => {
    addToCart(item);
    toast({
      title: "Added to Cart",
      description: `${item.name} has been added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-primary">Menu</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully crafted dishes made with the finest ingredients and authentic flavors.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-6">
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search dishes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-12 text-base"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="rounded-full"
              >
                {category.name}
                <Badge variant="secondary" className="ml-2">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>

          {/* Diet Filters */}
          <div className="flex justify-center items-center gap-4">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">Diet:</span>
            </div>
            <div className="flex gap-2">
              {[
                { id: "all", label: "All" },
                { id: "veg", label: "Vegetarian" },
                { id: "non-veg", label: "Non-Vegetarian" }
              ].map((filter) => (
                <Button
                  key={filter.id}
                  variant={dietFilter === filter.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setDietFilter(filter.id as any)}
                  className="rounded-full"
                >
                  {filter.label}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <FoodCard 
                item={item} 
                onAddToCart={handleAddToCart}
              />
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🍽️</div>
            <h3 className="text-2xl font-semibold mb-2 text-muted-foreground">
              No dishes found
            </h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your search or filter criteria
            </p>
            <Button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
                setDietFilter("all");
              }}
              variant="outline"
            >
              Clear Filters
            </Button>
          </div>
        )}

        {/* Results Count */}
        {filteredItems.length > 0 && (
          <div className="text-center mt-12">
            <p className="text-muted-foreground">
              Showing {filteredItems.length} of {menuData.length} dishes
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
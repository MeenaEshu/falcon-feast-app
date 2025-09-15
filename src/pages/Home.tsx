import { ArrowRight, Star, Users, Clock, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-restaurant.jpg";
import biryaniImage from "@/assets/biryani.jpg";
import caesarSaladImage from "@/assets/caesar-salad.jpg";
import chocolateBrownieImage from "@/assets/chocolate-brownie.jpg";

const Home = () => {
  const featuredDishes = [
    {
      id: "1",
      name: "Signature Biryani",
      price: 18.99,
      image: biryaniImage,
      rating: 4.8,
      description: "Aromatic basmati rice with tender chicken and exotic spices"
    },
    {
      id: "2", 
      name: "Caesar Salad",
      price: 12.99,
      image: caesarSaladImage,
      rating: 4.5,
      description: "Fresh romaine with parmesan and our signature dressing"
    },
    {
      id: "3",
      name: "Chocolate Brownie",
      price: 9.99,
      image: chocolateBrownieImage,
      rating: 4.7,
      description: "Rich chocolate brownie with vanilla ice cream"
    }
  ];

  const stats = [
    { icon: Users, label: "Happy Customers", value: "10,000+" },
    { icon: Star, label: "Average Rating", value: "4.8/5" },
    { icon: Clock, label: "Years Experience", value: "15+" },
    { icon: Award, label: "Awards Won", value: "25+" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Restaurant Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/30"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Welcome to
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Falcons Food
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-200">
            Experience culinary excellence with our authentic flavors, fresh ingredients, 
            and passionate cooking that brings joy to every bite.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/menu">
              <Button size="lg" className="btn-hero">
                Explore Menu
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black">
              Reserve Table
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-custom-md">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Featured <span className="text-primary">Dishes</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our most popular and chef-recommended dishes that keep our customers coming back for more.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredDishes.map((dish, index) => (
              <Card 
                key={dish.id}
                className="food-card border-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-xl">
                    <img 
                      src={dish.image} 
                      alt={dish.name}
                      className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">{dish.rating}</span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-foreground">{dish.name}</h3>
                    <p className="text-muted-foreground mb-4">{dish.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">${dish.price}</span>
                      <Button className="bg-gradient-primary">
                        Order Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/menu">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                View Full Menu
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Special <span className="text-primary">Offers</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Don't miss out on our limited-time deals and seasonal specials!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-gradient-primary text-primary-foreground border-0 overflow-hidden">
              <CardContent className="p-8 relative">
                <div className="absolute top-0 right-0 bg-white/20 rounded-full w-32 h-32 -mr-16 -mt-16"></div>
                <h3 className="text-2xl font-bold mb-4">Weekend Special</h3>
                <p className="text-lg mb-6 opacity-90">
                  Get 20% off on all main course items during weekends. Valid for dine-in and takeaway.
                </p>
                <Button variant="secondary" className="bg-white text-primary hover:bg-gray-100">
                  Order Now
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-secondary text-secondary-foreground border-0 overflow-hidden">
              <CardContent className="p-8 relative">
                <div className="absolute top-0 right-0 bg-white/20 rounded-full w-32 h-32 -mr-16 -mt-16"></div>
                <h3 className="text-2xl font-bold mb-4">Family Combo</h3>
                <p className="text-lg mb-6 opacity-90">
                  Perfect for families! Get a complete meal for 4 people starting from just $59.99.
                </p>
                <Button variant="secondary" className="bg-white text-secondary hover:bg-gray-100">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
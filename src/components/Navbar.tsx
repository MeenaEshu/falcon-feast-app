import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Menu, X, User } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  cartItemsCount?: number;
}

const Navbar = ({ cartItemsCount = 0 }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="navbar-glass sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
          >
            Falcons Food
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-medium transition-colors duration-300 hover:text-primary ${
                  isActive(item.path)
                    ? "text-primary border-b-2 border-primary"
                    : "text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Cart & Profile */}
          <div className="flex items-center space-x-4">
            <Link to="/cart" className="relative group">
              <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                <ShoppingCart className="h-5 w-5" />
              </Button>
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs w-6 h-6 rounded-full flex items-center justify-center animate-cart-bounce">
                  {cartItemsCount}
                </span>
              )}
            </Link>
            
            <Button variant="ghost" size="icon" className="hidden md:flex hover:bg-primary/10">
              <User className="h-5 w-5" />
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 animate-fade-in-up">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`font-medium py-2 px-4 rounded-lg transition-colors duration-300 ${
                    isActive(item.path)
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-muted"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
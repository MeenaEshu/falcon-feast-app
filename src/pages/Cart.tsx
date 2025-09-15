import { Link } from "react-router-dom";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/App";

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart, getTotalPrice, clearCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen py-16">
        <div className="container mx-auto px-4">
          <div className="text-center animate-fade-in-up">
            <ShoppingBag className="h-24 w-24 text-muted-foreground mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4 text-foreground">Your cart is empty</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Looks like you haven't added any delicious items to your cart yet.
            </p>
            <Link to="/menu">
              <Button size="lg" className="bg-gradient-primary">
                Explore Menu
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Your <span className="text-primary">Cart</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Review your selected items and proceed to checkout when ready.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">Cart Items ({cartItems.length})</h2>
              <Button
                variant="outline"
                onClick={clearCart}
                className="text-destructive hover:text-destructive"
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Clear Cart
              </Button>
            </div>

            {cartItems.map((item) => (
              <Card key={item.id} className="overflow-hidden animate-fade-in-up">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-20 h-20 rounded-lg object-cover"
                    />
                    
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-foreground">{item.name}</h3>
                      <p className="text-primary font-bold">${item.price.toFixed(2)}</p>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="h-8 w-8"
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      
                      <span className="font-semibold min-w-[2rem] text-center">
                        {item.quantity}
                      </span>
                      
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="h-8 w-8"
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>

                    <div className="text-right">
                      <p className="font-bold text-lg">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeFromCart(item.id)}
                        className="text-destructive hover:text-destructive p-1"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24 animate-slide-in-right">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>
                
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between items-center">
                      <div>
                        <span className="font-medium">{item.name}</span>
                        <span className="text-muted-foreground ml-2">x{item.quantity}</span>
                      </div>
                      <span className="font-semibold">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>

                <Separator className="my-6" />

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span className="font-semibold">${getTotalPrice().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery Fee:</span>
                    <span className="font-semibold">$3.99</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax (8%):</span>
                    <span className="font-semibold">${(getTotalPrice() * 0.08).toFixed(2)}</span>
                  </div>
                  
                  <Separator className="my-4" />
                  
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total:</span>
                    <span className="text-primary">
                      ${(getTotalPrice() + 3.99 + (getTotalPrice() * 0.08)).toFixed(2)}
                    </span>
                  </div>
                </div>

                <div className="mt-8 space-y-3">
                  <Link to="/checkout" className="block">
                    <Button className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 h-12 text-lg">
                      Proceed to Checkout
                    </Button>
                  </Link>
                  
                  <Link to="/menu" className="block">
                    <Button variant="outline" className="w-full">
                      Continue Shopping
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
import { useState } from "react";
import { Link } from "react-router-dom";
import { CreditCard, MapPin, Phone, Mail, ArrowLeft, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/App";
import { useToast } from "@/hooks/use-toast";

const Checkout = () => {
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("card");
  const { cartItems, getTotalPrice, clearCart } = useCart();
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardName: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mock order placement
    setTimeout(() => {
      setIsOrderPlaced(true);
      clearCart();
      toast({
        title: "Order Placed Successfully!",
        description: "You will receive a confirmation email shortly.",
      });
    }, 1000);
  };

  if (cartItems.length === 0 && !isOrderPlaced) {
    return (
      <div className="min-h-screen py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Your cart is empty</h2>
            <p className="text-muted-foreground mb-8">Add some items to your cart before checkout.</p>
            <Link to="/menu">
              <Button className="bg-gradient-primary">
                Go to Menu
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (isOrderPlaced) {
    return (
      <div className="min-h-screen py-16">
        <div className="container mx-auto px-4 max-w-md">
          <div className="text-center animate-fade-in-up">
            <CheckCircle className="h-24 w-24 text-success mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4 text-success">Order Placed Successfully!</h2>
            <p className="text-muted-foreground mb-8">
              Thank you for your order. You will receive a confirmation email with tracking details shortly.
            </p>
            <div className="space-y-3">
              <Link to="/menu" className="block">
                <Button className="w-full bg-gradient-primary">
                  Continue Shopping
                </Button>
              </Link>
              <Link to="/" className="block">
                <Button variant="outline" className="w-full">
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const totalPrice = getTotalPrice();
  const deliveryFee = 3.99;
  const tax = totalPrice * 0.08;
  const grandTotal = totalPrice + deliveryFee + tax;

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="mb-8 animate-fade-in-up">
          <Link to="/cart" className="inline-flex items-center text-primary hover:underline mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Cart
          </Link>
          <h1 className="text-4xl font-bold mb-4">
            <span className="text-primary">Checkout</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Checkout Form */}
          <div className="space-y-6">
            {/* Contact Information */}
            <Card className="animate-fade-in-up">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="h-5 w-5 mr-2 text-primary" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="john.doe@example.com"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="(555) 123-4567"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Delivery Address */}
            <Card className="animate-fade-in-up">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-primary" />
                  Delivery Address
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="address">Street Address</Label>
                  <Input
                    id="address"
                    value={formData.address}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                    placeholder="123 Main Street"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input
                      id="city"
                      value={formData.city}
                      onChange={(e) => handleInputChange("city", e.target.value)}
                      placeholder="New York"
                    />
                  </div>
                  <div>
                    <Label htmlFor="zipCode">ZIP Code</Label>
                    <Input
                      id="zipCode"
                      value={formData.zipCode}
                      onChange={(e) => handleInputChange("zipCode", e.target.value)}
                      placeholder="10001"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Method */}
            <Card className="animate-fade-in-up">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CreditCard className="h-5 w-5 mr-2 text-primary" />
                  Payment Method
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="card" id="card" />
                    <Label htmlFor="card">Credit/Debit Card</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="cash" id="cash" />
                    <Label htmlFor="cash">Cash on Delivery</Label>
                  </div>
                </RadioGroup>

                {paymentMethod === "card" && (
                  <div className="space-y-4 mt-4">
                    <div>
                      <Label htmlFor="cardName">Cardholder Name</Label>
                      <Input
                        id="cardName"
                        value={formData.cardName}
                        onChange={(e) => handleInputChange("cardName", e.target.value)}
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input
                        id="cardNumber"
                        value={formData.cardNumber}
                        onChange={(e) => handleInputChange("cardNumber", e.target.value)}
                        placeholder="1234 5678 9012 3456"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiryDate">Expiry Date</Label>
                        <Input
                          id="expiryDate"
                          value={formData.expiryDate}
                          onChange={(e) => handleInputChange("expiryDate", e.target.value)}
                          placeholder="MM/YY"
                        />
                      </div>
                      <div>
                        <Label htmlFor="cvv">CVV</Label>
                        <Input
                          id="cvv"
                          value={formData.cvv}
                          onChange={(e) => handleInputChange("cvv", e.target.value)}
                          placeholder="123"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24 animate-slide-in-right">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between items-center">
                      <div className="flex items-center space-x-3">
                        <img
                          src={item.imageUrl}
                          alt={item.name}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div>
                          <p className="font-medium">{item.name}</p>
                          <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                        </div>
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
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery Fee:</span>
                    <span>${deliveryFee.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax (8%):</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total:</span>
                    <span className="text-primary">${grandTotal.toFixed(2)}</span>
                  </div>
                </div>

                <Button
                  onClick={handlePlaceOrder}
                  className="w-full mt-8 bg-gradient-primary hover:shadow-glow transition-all duration-300 h-12"
                >
                  Place Order - ${grandTotal.toFixed(2)}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
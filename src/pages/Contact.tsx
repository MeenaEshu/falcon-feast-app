import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Contact form submitted");
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: ["123 Food Street", "Cuisine City, FC 12345"]
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@falconsfood.com", "orders@falconsfood.com"]
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon - Thu: 11am - 10pm", "Fri - Sun: 11am - 11pm"]
    }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions, feedback, or want to make a reservation? We'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="animate-fade-in-up">
              <h2 className="text-3xl font-bold mb-8 text-foreground">Contact Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contactInfo.map((item, index) => (
                  <Card 
                    key={index}
                    className="p-6 hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <item.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                        {item.details.map((detail, idx) => (
                          <p key={idx} className="text-muted-foreground">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Map */}
            <Card className="animate-fade-in-up">
              <CardContent className="p-0">
                <div className="w-full h-64 bg-gradient-hero rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                    <p className="text-muted-foreground">Interactive Map Coming Soon</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      123 Food Street, Cuisine City, FC 12345
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" required />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" required />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="john.doe@example.com" 
                      required 
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="(555) 123-4567" />
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input 
                      id="subject" 
                      placeholder="How can we help you?" 
                      required 
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your inquiry, feedback, or reservation request..."
                      className="min-h-[120px]"
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="mt-8 space-y-4">
              <h3 className="text-xl font-semibold">Quick Actions</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Button variant="outline" className="justify-start h-auto p-4">
                  <Phone className="h-5 w-5 mr-3 text-primary" />
                  <div className="text-left">
                    <p className="font-semibold">Call for Reservations</p>
                    <p className="text-sm text-muted-foreground">(555) 123-4567</p>
                  </div>
                </Button>
                
                <Button variant="outline" className="justify-start h-auto p-4">
                  <Mail className="h-5 w-5 mr-3 text-primary" />
                  <div className="text-left">
                    <p className="font-semibold">Email Orders</p>
                    <p className="text-sm text-muted-foreground">orders@falconsfood.com</p>
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "What are your delivery hours?",
                answer: "We deliver from 11 AM to 10 PM Monday through Thursday, and 11 AM to 11 PM Friday through Sunday."
              },
              {
                question: "Do you accept dietary restrictions?",
                answer: "Yes! We clearly mark all vegetarian dishes and can accommodate most dietary restrictions with advance notice."
              },
              {
                question: "How can I make a reservation?",
                answer: "You can call us at (555) 123-4567 or use our contact form above. We recommend reservations for parties of 6 or more."
              },
              {
                question: "Do you offer catering services?",
                answer: "Yes, we provide catering for events of all sizes. Contact us for custom menu options and pricing."
              }
            ].map((faq, index) => (
              <Card key={index} className="p-6">
                <h3 className="font-semibold text-lg mb-3 text-primary">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
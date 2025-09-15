import { Users, Award, Heart, Utensils } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion for Food",
      description: "We pour our heart into every dish, using only the freshest ingredients and traditional cooking methods."
    },
    {
      icon: Users,
      title: "Community Focus", 
      description: "We're not just a restaurant, we're a gathering place where families and friends create lasting memories."
    },
    {
      icon: Award,
      title: "Excellence Standards",
      description: "Our commitment to quality has earned us recognition and the trust of thousands of satisfied customers."
    },
    {
      icon: Utensils,
      title: "Culinary Innovation",
      description: "While respecting tradition, we continuously innovate to bring you exciting new flavors and experiences."
    }
  ];

  const team = [
    {
      name: "Chef Maria Rodriguez",
      role: "Head Chef & Co-Founder",
      description: "With 20 years of culinary experience, Maria brings authentic flavors and innovative techniques to every dish."
    },
    {
      name: "James Thompson",
      role: "Restaurant Manager & Co-Founder", 
      description: "James ensures every guest receives exceptional service and a memorable dining experience."
    },
    {
      name: "Sarah Kim",
      role: "Pastry Chef",
      description: "Sarah creates our delectable desserts and baked goods that perfectly complement our savory offerings."
    }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-primary">Falcons Food</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Since our founding in 2009, Falcons Food has been dedicated to bringing you exceptional dining experiences 
            through authentic flavors, fresh ingredients, and passionate service that makes every visit special.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Falcons Food began as a dream shared by two culinary enthusiasts who believed that great food 
                could bring people together and create lasting memories. What started as a small family restaurant 
                has grown into a beloved dining destination known for its authentic flavors and warm hospitality.
              </p>
              <p>
                Our journey has been guided by simple principles: use the freshest ingredients, honor traditional 
                cooking methods, and treat every guest like family. These values have shaped everything we do, 
                from our carefully crafted menu to our welcoming atmosphere.
              </p>
              <p>
                Today, we're proud to serve our community with the same passion and dedication that inspired 
                our founding. Every dish tells a story, and we're honored to be part of your dining experiences, 
                celebrations, and everyday moments.
              </p>
            </div>
          </div>

          <div className="animate-slide-in-right">
            <div className="bg-gradient-hero rounded-xl p-8 h-full flex flex-col justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🍽️</div>
                <h3 className="text-2xl font-bold mb-4">15+ Years of Excellence</h3>
                <p className="text-muted-foreground mb-6">
                  Serving our community with passion, quality, and authentic flavors that keep families coming back generation after generation.
                </p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">10,000+</div>
                    <div className="text-sm text-muted-foreground">Happy Customers</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">50+</div>
                    <div className="text-sm text-muted-foreground">Menu Items</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">25+</div>
                    <div className="text-sm text-muted-foreground">Awards Won</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Our <span className="text-primary">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do, from sourcing ingredients to serving our guests.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card 
                key={index}
                className="text-center p-6 hover:shadow-lg transition-all duration-300 animate-fade-in-up border-0 bg-gradient-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Meet Our <span className="text-primary">Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The passionate individuals behind every exceptional dish and memorable experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card 
                key={index}
                className="text-center p-6 hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-0">
                  <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary-foreground">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-hero rounded-xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            "To create exceptional dining experiences that bring people together, celebrate authentic flavors, 
            and contribute positively to our community. We believe that great food is more than sustenance—it's 
            a way to connect, share joy, and create lasting memories that enrich lives."
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
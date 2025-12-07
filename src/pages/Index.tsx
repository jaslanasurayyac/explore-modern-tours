import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Star, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DestinationCard from "@/components/DestinationCard";

import heroImage from "@/assets/hero-santorini.jpg";
import baliImage from "@/assets/destination-bali.jpg";
import peruImage from "@/assets/destination-peru.jpg";
import maldivesImage from "@/assets/destination-maldives.jpg";

const Index = () => {
  const featuredDestinations = [
    {
      image: baliImage,
      title: "Bali Paradise",
      location: "Bali, Indonesia",
      price: "$1,299",
      duration: "7 Days",
    },
    {
      image: peruImage,
      title: "Machu Picchu Trek",
      location: "Cusco, Peru",
      price: "$1,899",
      duration: "10 Days",
    },
    {
      image: maldivesImage,
      title: "Maldives Escape",
      location: "Maldives",
      price: "$2,499",
      duration: "5 Days",
    },
  ];

  const stats = [
    { icon: MapPin, value: "50+", label: "Destinations" },
    { icon: Users, value: "10K+", label: "Happy Travelers" },
    { icon: Star, value: "4.9", label: "Average Rating" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Santorini Greece sunset view with white buildings and blue domes"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/60 via-foreground/40 to-transparent" />
        </div>

        <div className="relative container-travel pt-20">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-2 bg-primary/20 backdrop-blur-sm text-primary-foreground text-sm font-medium rounded-full mb-6 animate-fade-up">
              ✨ Discover the World
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-card leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Your Next
              <br />
              <span className="text-primary">Adventure</span>
              <br />
              Awaits
            </h1>
            <p className="text-card/90 text-lg md:text-xl max-w-lg mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Explore breathtaking destinations, create lasting memories, and embark on journeys that transform your perspective.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <Button variant="hero" size="xl" asChild>
                <Link to="/destinations">
                  Explore Destinations
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-card/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-card/70 rounded-full" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted/50">
        <div className="container-travel">
          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                <p className="font-display text-2xl md:text-3xl font-bold text-foreground">{stat.value}</p>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-20 md:py-28">
        <div className="container-travel">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Explore</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
              Featured Destinations
            </h2>
            <p className="text-muted-foreground">
              Hand-picked destinations that offer extraordinary experiences, from tropical paradises to ancient wonders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDestinations.map((destination) => (
              <DestinationCard key={destination.title} {...destination} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/destinations">
                View All Destinations
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container-travel text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Let us help you plan the perfect getaway. Contact our travel experts today.
          </p>
          <Button variant="secondary" size="xl" asChild>
            <Link to="/contact">
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

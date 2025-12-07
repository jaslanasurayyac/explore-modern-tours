import { MapPin, Clock, DollarSign } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DestinationCard from "@/components/DestinationCard";

import baliImage from "@/assets/destination-bali.jpg";
import peruImage from "@/assets/destination-peru.jpg";
import maldivesImage from "@/assets/destination-maldives.jpg";
import japanImage from "@/assets/destination-japan.jpg";
import switzerlandImage from "@/assets/destination-switzerland.jpg";
import heroImage from "@/assets/hero-santorini.jpg";

const Destinations = () => {
  const destinations = [
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
    {
      image: japanImage,
      title: "Cherry Blossom Journey",
      location: "Kyoto, Japan",
      price: "$2,199",
      duration: "8 Days",
    },
    {
      image: switzerlandImage,
      title: "Alpine Adventure",
      location: "Swiss Alps",
      price: "$2,799",
      duration: "6 Days",
    },
    {
      image: heroImage,
      title: "Greek Island Hopping",
      location: "Santorini, Greece",
      price: "$1,699",
      duration: "9 Days",
    },
  ];

  const filters = [
    { icon: MapPin, label: "All Regions" },
    { icon: Clock, label: "Duration" },
    { icon: DollarSign, label: "Price Range" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Page Header */}
      <section className="pt-28 pb-16 md:pt-32 md:pb-20 bg-muted/30">
        <div className="container-travel">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Explore the World
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-2 mb-4">
              Our Destinations
            </h1>
            <p className="text-muted-foreground text-lg">
              From tropical beaches to ancient ruins, discover our handpicked collection of extraordinary travel experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 border-b border-border sticky top-16 md:top-20 bg-background/95 backdrop-blur-sm z-40">
        <div className="container-travel">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter.label}
                className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
              >
                <filter.icon className="h-4 w-4" />
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16 md:py-20">
        <div className="container-travel">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <div
                key={destination.title}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <DestinationCard {...destination} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-muted/50">
        <div className="container-travel">
          <div className="bg-card rounded-2xl p-8 md:p-12 text-center shadow-sm">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
              Stay Updated
            </h2>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Subscribe to our newsletter for exclusive deals and travel inspiration.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Destinations;

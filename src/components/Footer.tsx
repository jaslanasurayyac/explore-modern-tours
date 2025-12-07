import { Link } from "react-router-dom";
import { Compass, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-travel py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <Compass className="h-8 w-8 text-primary" />
              <span className="font-display text-2xl font-semibold">Wanderlust</span>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed">
              Discover extraordinary destinations and create unforgettable memories with our curated travel experiences.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="text-background/60 hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "Destinations", "About Us", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Top Destinations</h4>
            <ul className="space-y-3">
              {["Bali, Indonesia", "Machu Picchu, Peru", "Maldives", "Kyoto, Japan", "Swiss Alps"].map((item) => (
                <li key={item}>
                  <Link to="/destinations" className="text-background/70 hover:text-primary transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-background/70 text-sm">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                123 Travel Lane, Adventure City
              </li>
              <li className="flex items-center gap-3 text-background/70 text-sm">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center gap-3 text-background/70 text-sm">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                hello@wanderlust.com
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 text-center">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} Wanderlust Travel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

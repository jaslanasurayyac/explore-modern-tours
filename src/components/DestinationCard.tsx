import { Link } from "react-router-dom";

interface DestinationCardProps {
  image: string;
  title: string;
  location: string;
  price: string;
  duration: string;
}

const DestinationCard = ({ image, title, location, price, duration }: DestinationCardProps) => {
  return (
    <Link to="/destinations" className="group block">
      <article className="bg-card rounded-xl overflow-hidden shadow-sm hover-lift">
        <div className="relative aspect-[4/5] overflow-hidden">
          <img
            src={image}
            alt={`${title} - ${location}`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <span className="inline-block px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full mb-2">
              {duration}
            </span>
            <h3 className="font-display text-xl font-semibold text-card mb-1">{title}</h3>
            <p className="text-card/80 text-sm">{location}</p>
          </div>
        </div>
        <div className="p-5 flex items-center justify-between">
          <div>
            <p className="text-muted-foreground text-xs">Starting from</p>
            <p className="text-foreground font-semibold text-lg">{price}</p>
          </div>
          <span className="text-primary text-sm font-medium group-hover:underline">
            View Details →
          </span>
        </div>
      </article>
    </Link>
  );
};

export default DestinationCard;

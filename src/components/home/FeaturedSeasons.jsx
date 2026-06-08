import { Link } from "react-router-dom";
import { seasons } from "../../data/seasons";
import SeasonCard from "../season/SeasonCard";

function FeaturedSeasons() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      
      <div className="flex justify-between items-center mb-8">
        
        <h2 className="text-3xl font-bold">
          Featured Seasons
        </h2>

        <Link
          to="/seasons"
          className="text-yellow-500 hover:text-yellow-400"
        >
          View All →
        </Link>

      </div>

       {/* only showing 3 seasons for the homepage, the rest will be on the seasons page */}
       
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {seasons.slice(0, 3).map((season) => (
      <SeasonCard
        key={season.id}
        season={season}
      />
    ))}
      </div>

    </section>
  );
}

export default FeaturedSeasons;
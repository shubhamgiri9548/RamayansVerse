import { seasons } from "../data/seasons";
import SeasonCard from "../components/season/SeasonCard";

function Seasons() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      
      <div className="mb-10">
        <h1 className="text-4xl font-bold">
          All Seasons
        </h1>

        <p className="text-gray-400 mt-2">
          Explore every season of the Ramayana journey.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {seasons.map((season) => (
          <SeasonCard
            key={season.id}
            season={season}
          />
        ))}
      </div>

    </section>
  );
}

export default Seasons;
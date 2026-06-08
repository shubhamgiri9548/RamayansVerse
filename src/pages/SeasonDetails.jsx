import { useParams } from "react-router-dom";
import { seasons } from "../data/seasons";
import EpisodeCard from "../components/season/EpisodeCard";

function SeasonDetails() {
  const { seasonId } = useParams();

  const season = seasons.find(
    (item) => item.id === Number(seasonId)
  );

  if (!season) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1>Season not found</h1>
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">


      {/* Header */}
      <div className="mb-10">
        {/* banner */}
         <div className="overflow-hidden rounded-2xl mb-8">
            <img
              src={season.thumbnail}
              alt={season.title}
              className="w-full h-75 md:h-100 object-cover"
            />
          </div>

        <h1 className="text-5xl font-bold text-yellow-500">
          {season.title}
        </h1>

        <p className="mt-4 text-gray-400 max-w-3xl">
          {season.description}
        </p>

        <p className="mt-4 text-yellow-500">
          {season.episodes.length} Episodes
        </p>
      </div>

      {/* Episodes */}
      <div className="space-y-4">
        {season.episodes.map((episode) => (
          <EpisodeCard
            key={episode.id}
            episode={episode}
            seasonId={season.id}
          />
        ))}
      </div>

    </section>
  );
}

export default SeasonDetails;
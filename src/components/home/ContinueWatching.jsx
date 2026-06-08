import { Link } from "react-router-dom";
import { seasons } from "../../data/seasons";

function ContinueWatching() {
  const savedData = JSON.parse(
    localStorage.getItem("continueWatching")
  );

  if (!savedData) return null;

  const season = seasons.find(
    (season) => season.id === savedData.seasonId
  );

  if (!season) return null;

  const episode = season.episodes.find(
    (episode) => episode.id === savedData.episodeId
  );

  if (!episode) return null;

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      
      <h2 className="text-3xl font-bold mb-6">
        Continue Watching
      </h2>

      <div className="bg-[#181818] rounded-2xl overflow-hidden flex flex-col md:flex-row">
        
        <img
          src={`https://img.youtube.com/vi/${episode.videoId}/mqdefault.jpg`}
          alt={episode.title}
          className="w-full md:w-80 h-60 object-cover"
        />

        <div className="p-6 flex flex-col justify-center">
          
          <h3 className="text-2xl font-semibold">
            {episode.title}
          </h3>

          <p className="text-gray-400 mt-2">
            {season.title}
          </p>

          <p className="text-yellow-500 mt-2">
            {episode.duration}
          </p>

          {savedData.watchedAt && (
            <p className="text-gray-400 mt-2">
                Last watched:{" "}
                {new Date(savedData.watchedAt).toLocaleString()}
            </p>
            )}
            
          <Link
            to={`/watch/${season.id}/${episode.id}`}
            className="mt-5 inline-block bg-yellow-500 text-black font-semibold px-5 py-3 rounded-lg w-fit"
          >
            Resume Watching
          </Link>

        </div>

      </div>

    </section>
  );
}

export default ContinueWatching;
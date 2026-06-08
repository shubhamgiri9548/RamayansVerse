import { Link, useParams } from "react-router-dom";
import { seasons } from "../data/seasons";
import { useEffect } from "react";

function EpisodePlayer() {

  const { seasonId, episodeId } = useParams();

  const season = seasons.find(
    (season) => season.id === Number(seasonId)
  );

  if (!season) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold">Season not found</h1>
      </div>
    );
  }

  const episode = season.episodes.find(
    (episode) => episode.id === Number(episodeId)
  );

  if (!episode) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold">Episode not found</h1>
      </div>
    );
  }

    useEffect(() => {
  localStorage.setItem(
    "continueWatching",
    JSON.stringify({
      seasonId: season.id,
      episodeId: episode.id,
      watchedAt: Date.now()
    })
  );
}, [season.id, episode.id]);

  const currentEpisodeIndex = season.episodes.findIndex(
    (episode) => episode.id === Number(episodeId)
  );

  const previousEpisode =
    season.episodes[currentEpisodeIndex - 1];

  const nextEpisode =
    season.episodes[currentEpisodeIndex + 1];

  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      
      {/* Back Button */}
      <Link
        to={`/seasons/${season.id}`}
        className="inline-block mb-6 text-yellow-500 hover:text-yellow-400"
      >
        ← Back to Season
      </Link>

      {/* Video Player */}
      <div className="aspect-video overflow-hidden rounded-2xl bg-black">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${episode.videoId}`}
          title={episode.title}
          allowFullScreen
        />
      </div>

      {/* Episode Info */}
      <div className="mt-8">
        <h1 className="text-4xl font-bold">
          {episode.title}
        </h1>

        <p className="mt-2 text-yellow-500">
          {episode.duration}
        </p>

        <p className="mt-4 text-gray-400 leading-relaxed">
          {episode.description}
        </p>
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between mt-10">
        
        {previousEpisode ? (
          <Link
            to={`/watch/${season.id}/${previousEpisode.id}`}
            className="px-5 py-3 bg-[#181818] text-white rounded-lg hover:bg-[#252525] transition"
          >
            ← Previous Episode
          </Link>
        ) : (
          <div />
        )}

        {nextEpisode ? (
          <Link
            to={`/watch/${season.id}/${nextEpisode.id}`}
            className="px-5 py-3 bg-[#181818] text-white rounded-lg hover:bg-[#252525] transition"
          >
            Next Episode →
          </Link>
        ) : (
          <div />
        )}
      </div>

    </section>
  );
}

export default EpisodePlayer;
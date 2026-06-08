import { Link } from "react-router-dom";

function EpisodeCard({ episode, seasonId }) {
  return (
    <Link
      to={`/watch/${seasonId}/${episode.id}`}
      className="group flex gap-4 bg-[#181818] rounded-xl overflow-hidden hover:bg-[#222222] transition"
    >
      <img
        src={`https://img.youtube.com/vi/${episode.videoId}/mqdefault.jpg`}
        alt={episode.title}
        className="w-40 h-24 object-cover"
      />

      <div className="flex-1 p-3">
        <h3 className="font-semibold text-lg">
          {episode.title}
        </h3>

        <p className="text-sm text-gray-400 mt-1 line-clamp-2">
          {episode.description}
        </p>

        <p className="text-yellow-500 text-sm mt-2">
          {episode.duration}
        </p>
      </div>
    </Link>
  );
}

export default EpisodeCard;
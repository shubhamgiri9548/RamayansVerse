import { Link } from "react-router-dom";

function SeasonCard({ season }) {
  return (
    <Link
      to={`/seasons/${season.id}`}
      className="group block overflow-hidden rounded-xl bg-[#181818] hover:bg-[#222222] transition-all duration-300"
    >
      <div className="overflow-hidden">
        <img
          src={season.thumbnail}
          alt={season.title}
          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-4">
        <h3 className="text-xl font-semibold text-white">
          {season.title}
        </h3>

        <p className="text-sm text-gray-400 mt-2 line-clamp-2">
          {season.description}
        </p>

        <p className="text-yellow-500 text-sm mt-3">
          {season.episodes.length} Episodes
        </p>

         <span className="text-sm text-gray-400 group-hover:text-white">
          Watch →
        </span>
      </div>
    </Link>
  );
}

export default SeasonCard;
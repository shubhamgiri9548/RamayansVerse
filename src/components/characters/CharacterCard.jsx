import { Link } from "react-router-dom";

function CharacterCard({ character }) {
  return (
    <Link
      to="/characters"
      className="group block overflow-hidden rounded-xl bg-[#181818] hover:bg-[#222222] transition-all duration-300"
    >
      <div className="overflow-hidden">
        <img
          src={character.image}
          alt={character.name}
          className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-4">
        <h3 className="text-xl font-semibold text-white">
          {character.name}
        </h3>

        <p className="text-sm text-yellow-500 mt-1">
          {character.role}
        </p>
      </div>
    </Link>
  );
}

export default CharacterCard;
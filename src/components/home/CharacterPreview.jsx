import { Link } from "react-router-dom";
import { characters } from "../../data/characters";
import CharacterCard from "../characters/CharacterCard";

function CharacterPreview() {
  const featuredCharacters = characters.slice(0, 4);

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">

      <div className="flex items-center justify-between mb-8">

        <h2 className="text-3xl font-bold">
          Popular Characters
        </h2>

        <Link
          to="/characters"
          className="text-yellow-500 hover:text-yellow-400"
        >
          View All →
        </Link>

      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {featuredCharacters.slice(0, 4).map((character) => (
          <CharacterCard
            key={character.id}
            character={character}
          />
        ))}
      </div>

    </section>
  );
}

export default CharacterPreview;
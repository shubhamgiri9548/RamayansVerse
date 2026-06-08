import { characters } from "../data/characters";
import CharacterCard from "../components/characters/CharacterCard";

function Characters() {
  return (
    <div className="max-w-7xl mx-auto p-6">

      <h1 className="text-4xl font-bold text-center mb-10">
        Ramayana Characters
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {characters.map((character) => (
          <CharacterCard
            key={character.id}
            character={character}
          />
        ))}
      </div>

    </div>
  );
}

export default Characters;
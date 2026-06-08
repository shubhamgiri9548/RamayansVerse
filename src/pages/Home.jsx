import Hero from "../components/home/Hero";
import FeaturedSeasons from "../components/home/FeaturedSeasons";
import CharacterPreview from "../components/home/CharacterPreview";
import ContinueWatching from "../components/home/ContinueWatching";

function Home() {
  return (
    <>
      <Hero />
      
      <ContinueWatching />

      <FeaturedSeasons />

      <CharacterPreview />

    </>
  );
}

export default Home;
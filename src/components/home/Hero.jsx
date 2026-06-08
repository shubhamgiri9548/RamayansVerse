import { useNavigate } from "react-router-dom";

function Hero() {

  const navigate = useNavigate();

  const handleStartWatching = () => {
  navigate("/watch/1/1");
};

  return (
    <section className="relative h-[80vh] flex items-center justify-center">

      {/* Background Image */}
      <img
        src="/Lord Ram.png"
        alt="Ramayana"
        className="absolute inset-0 w-full h-full object-cover object-[center_85%]"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 mb-24">

        <h1 className="text-5xl md:text-7xl font-bold text-yellow-500">
            RamayanaVerse
        </h1>

        <p className="mt-4 text-lg md:text-xl text-gray-300">
          Experience the complete Valmiki Ramayana journey.
        </p>

          <button onClick={handleStartWatching} className="mt-8 px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg">
          Start Watching
        </button>

      </div>
    </section>
  );
}

export default Hero;
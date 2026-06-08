import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        <h1 className="text-8xl font-bold text-yellow-500 mb-4">
          404
        </h1>

        <h2 className="text-4xl font-bold mb-4">
          Lost in the Forest?
        </h2>

        <p className="text-gray-300 text-lg mb-8">
          The page you are looking for could not be found.
          Perhaps you have wandered too far from the path of
          Lord Rama.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            to="/"
            className="bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg hover:bg-yellow-400 transition"
          >
            Return Home
          </Link>

          <Link
            to="/seasons"
            className="border border-yellow-500 text-yellow-500 font-semibold px-6 py-3 rounded-lg hover:bg-yellow-500 hover:text-black transition"
          >
            Browse Episodes
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
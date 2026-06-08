import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Seasons from "../pages/Seasons";
import SeasonDetails from "../pages/SeasonDetails";
import EpisodePlayer from "../pages/EpisodePlayer";
import Characters from "../pages/Characters";
import NotFound from "../pages/NotFound";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Fotter";
import Yatra from "../pages/Yatra";



function AppRoutes() {
  return (
    
    <>
    
    <Navbar />

    <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/seasons" element={<Seasons />} />

        <Route
          path="/seasons/:seasonId"
          element={<SeasonDetails />}
        />

        <Route
          path="/watch/:seasonId/:episodeId"
          element={<EpisodePlayer />}
        />

        <Route
          path="/characters"
          element={<Characters />}
        />

        <Route
          path="/yatra"
          element={<Yatra />} />  
        

        <Route
          path="*"
          element={<NotFound />}
        />
    </Routes>

    <Footer />
    </>
  );
}

export default AppRoutes;
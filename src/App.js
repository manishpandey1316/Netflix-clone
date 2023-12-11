
import { LandingPage } from "./pages/LandingPage";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";

import Netflix from "./pages/Netflix";
import Player from "./pages/Player";
import MoviePage from "./pages/Movies";
import TvShows from "./pages/TvShows";

export default function App() {
  return (
    
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Netflix" element={<Netflix />} />
        <Route path='/Player' element={<Player/>}/>
        <Route path="/Movies" element={<MoviePage/>} />
        <Route path='/TvShows' element={<TvShows/>}/>
      </Routes>
    </BrowserRouter>
   
   
  );
}



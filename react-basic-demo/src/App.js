import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header/Header";

import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import MoviePage from "./pages/MoviePage";
import TVPage from "./pages/TVPage";
import CelebirityPage from "./pages/CelebirityPage";
import TvDetailPage from "./pages/TvDetailPage";
import MovieDetailPage from "./pages/MovieDetailPage";

function App() {
  return (
    <>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/loginPage" element={<LoginPage />} />
            <Route path="/celebirityPage" element={<CelebirityPage />} />
            <Route path="/moviePage" element={<MoviePage />} />
            <Route path="/tvPage" element={<TVPage />} />
            <Route path="/tv/:name" element={<TvDetailPage />} />
            <Route path="/movie/:title" element={<MovieDetailPage />} />
          </Routes>
        </Router>
    </>
  );
}

export default App;
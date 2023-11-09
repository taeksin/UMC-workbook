import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Celebirity from "./pages/Celebirity";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import NotFound from "./pages/NotFound";
import TV from "./pages/TV";
import Header from "./components/Header";
import MovieDetail from "./pages/MovieDetail";
function App() {
  return (
    <>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/Celebirity" element={<Celebirity />} />
            <Route path="/movie" element={<Movies />} />
            <Route path="/tv" element={<TV />} />
            <Route path="/movie/:title" element={<MovieDetail />} />
          </Routes>
        </Router>
    </>
  );
}

export default App;
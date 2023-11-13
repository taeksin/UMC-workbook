// Movie.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { movies } from "../../utils/movieDummy";
import { MovieContainer, MovieDetail, MovieInfo, Container, MovieImage } from "./Movie.style.jsx";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500";

const Movie = () => {
  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMovieClick = (title, posterPath, voteAverage, overview) => {
    navigate(`/movie/${title}`, {
      state: {
        posterPath,
        voteAverage,
        overview,
      },
    });
  };

  return (
    <div>
      <Container>
        {movies.results.map((movie, index) => (
          <MovieContainer
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() =>
              handleMovieClick(
                movie.title,
                `${IMG_BASE_URL}${movie.poster_path}`,
                movie.vote_average,
                movie.overview
              )
            }
          >
            <MovieImage
              src={`${IMG_BASE_URL}${movie.poster_path}`}
              alt={movie.title}
            />
            {hoveredIndex === index && (
              <MovieDetail>
                <h4>{movie.title}</h4>
                <p>{movie.overview}</p>
              </MovieDetail>
            )}

            <MovieInfo>
              <p id="movieTitle" style={{ paddingLeft: "0.5vw" }}>
                {movie.title}
              </p>
              <p id="movieVote" style={{ paddingRight: "0.5vw" }}>
                {movie.vote_average}
              </p>
            </MovieInfo>
          </MovieContainer>
        ))}
      </Container>
    </div>
  );
};

export default Movie;
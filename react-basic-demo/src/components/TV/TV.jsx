// TVComponent.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { tvs } from "../../utils/tvDummy";
import { TvContainer, TvDetail, TvInfo, Container, TvImage } from "./TV.style.jsx";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500";

const Tv = () => {
  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleTvClick = (name, posterPath, voteAverage, overview) => {
    navigate(`/tv/${name}`, {
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
        {tvs.results.map((tv, index) => (
          <TvContainer
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() =>
              handleTvClick(
                tv.name,
                `${IMG_BASE_URL}${tv.poster_path}`,
                tv.vote_average,
                tv.overview
              )
            }
          >
            <TvImage
              src={`${IMG_BASE_URL}${tv.poster_path}`}
              alt={tv.name}
            />
            {hoveredIndex === index && (
              <TvDetail>
                <h4>{tv.name}</h4>
                <p>{tv.overview}</p>
              </TvDetail>
            )}

            <TvInfo>
              <p id="tvname" style={{ paddingLeft: "0.5vw" }}>
                {tv.name}
              </p>
              <p id="tvVote" style={{ paddingRight: "0.5vw" }}>
                {tv.vote_average}
              </p>
            </TvInfo>
          </TvContainer>
        ))}
      </Container>

      
    </div>
  );
};

export default Tv;

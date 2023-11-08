import Movies from "../components/Movie/Movie";
import React from 'react';
import { movies } from '../utils/movieDummy';
import styled from "styled-components";

export const Container = styled.div`
    display : flex;
    justify-content : center;
    flex-wrap : wrap; 
    gap: 1vw;
    background: #000000;
    padding-top: 2vw;
`;

export default function Movie() {
    return (
        <Container>
            {movies.results.map((item)=>(
            <Movies
                title={item.title}
                poster_path={item.poster_path}
                vote_average={item.vote_average}
                overview={item.overview}
            />
            ))
            }
        </Container>
    );
}

//export default Movie;
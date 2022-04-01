import React from "react";
import { Styles } from "./styles";
import { TMDB_IMAGE } from "utils/endpoints";
import { Link } from "react-router-dom";
import { Skeleton } from "@mui/material";

function MovieCard({ movieData, isLoading }) {
  if (isLoading) {
    return (
      <Styles>
        <Skeleton variant="rect" width="240px" height="330px" />
      </Styles>
    );
  }
  return (
    <Styles>
      <Link to={`/movies/${movieData.id}`}>
        <img
          alt={movieData.title}
          src={`${TMDB_IMAGE}/${movieData.poster_path}`}
        />
      </Link>

      <Link to={`/movies/${movieData.id}`} className="movie-name">
        {movieData.title}
      </Link>
    </Styles>
  );
}

export default MovieCard;

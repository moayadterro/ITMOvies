import React from "react";
import {
  Backdrop,
  Button,
  Chip,
  CircularProgress,
  Grid,
  TextField,
} from "@mui/material";
import { getMovie, TMDB_IMAGE } from "utils/endpoints";
import AppTemplate from "templates/app-template";
import { useParams } from "react-router-dom";
import NavBar from "components/navbar";
import { Styles } from "./styles";
import http from "utils/http";

function MoviePage() {
  const [state, setState] = React.useState({
    movie: {},
    isLoading: true,
  });
  const { id } = useParams();

  React.useEffect(() => {
    const getMovieDetials = async () => {
      let response = await http.get(getMovie(id));
      console.log(response.data);
      setState((prevState) => ({
        ...prevState,
        movie: response.data,
        isLoading: false,
      }));
    };
    getMovieDetials();
  }, [id]);

  return (
    <AppTemplate nav={<NavBar />}>
      <Styles>
        <Grid container mt={8}>
          <Grid item md={4} className="movie-poster">
            <img
              alt={state.movie.title}
              src={`${TMDB_IMAGE}/${state.movie.poster_path}`}
            />
            <p>{state.movie.title}</p>
            <div className="chips-container">
              {!state.isLoading &&
                state.movie.genres.map((category, index) => {
                  return (
                    <Chip
                      className="category-chips"
                      size="small"
                      label={category.name}
                      key={category.id}
                    />
                  );
                })}
            </div>
          </Grid>
          <Grid item md={6}>
            <div className="desc">Overview</div>
            <p>{state.movie.overview}</p>
            <Button color="secondary" className="watch-btn">
              add to watch list
            </Button>
            <Button>Marked it as watched</Button>
            <br />
            <br />
            <TextField fullWidth rows={4} multiline label="add comment" />
            <Button variant="contained" className="submit-btn">
              send
            </Button>
          </Grid>
        </Grid>
      </Styles>
      <Backdrop open={state.isLoading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </AppTemplate>
  );
}

export default MoviePage;

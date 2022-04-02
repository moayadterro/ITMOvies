import React from "react";
import { Button, Stack } from "@mui/material";
import NavBar from "components/navbar";
import AppTemplate from "templates/app-template";
import { Styles } from "./styles";
import poster from "images/poster.jpg";
import { Link } from "react-router-dom";
import { getPopularMoviesURL } from "utils/endpoints";
import http from "utils/http";
import MovieCard from "components/movie-card";
import _ from "lodash";
import Footer from "components/footer";

const SkeletonStack = () => {
  return (
    <Stack direction="row" className="popular-movie-stack">
      {_.times(10, (index) => {
        return <MovieCard key={index} isLoading={true} />;
      })}
    </Stack>
  );
};

function HomePage(props) {
  const [state, setState] = React.useState({
    mostPopular: [],
    isLoading: true,
  });

  React.useEffect(() => {
    const getMostPopularMovies = async () => {
      const { data } = await http.get(`${getPopularMoviesURL}&&page=1`);
      setState((prevState) => ({
        ...prevState,
        mostPopular: data.results,
        isLoading: false,
      }));
    };
    getMostPopularMovies();
  }, []);

  return (
    <AppTemplate nav={<NavBar background={poster} />} footer={<Footer />}>
      <Styles>
        <div className="poster" style={{ backgroundImage: `url(${poster})` }}>
          <div className="poster-content">
            <h1>
              <span className="info">Track</span> films you’ve watched
              <br /> Save those you want to see
              <br /> Tell your friends what’s
              <span className="warning"> good</span>
            </h1>
            <Link to="/signup" className="link">
              <Button
                color="primary"
                variant="contained"
                className="register-btn"
                disableElevation
              >
                Get started — it‘s free!
              </Button>
            </Link>
          </div>
        </div>

        <Stack direction="row" className="popular-movie-stack">
          {state.isLoading ? (
            <SkeletonStack />
          ) : (
            state.mostPopular.map((movie) => {
              return <MovieCard key={movie.id} movieData={movie} />;
            })
          )}
        </Stack>
      </Styles>
    </AppTemplate>
  );
}

export default HomePage;

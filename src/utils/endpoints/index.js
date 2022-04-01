/* The movie database apis */
export const API_KEY = "fb35a825b3402ebdc4b573003809ef80";

export const TMDB_IMAGE = "https://image.tmdb.org/t/p/w220_and_h330_face";

export const TMDB_API = "https://api.themoviedb.org/3";

/* my local apis  */
export const API_URL = "/api";

export const AUTH_URL = "/auth";

export const getAllArticles = API_URL + "/articles";

export const getAllArticlesTag = getAllArticles + "/tags";

export const getArticleByUserUrl = (username) =>
  API_URL + `/${username}/articles`;

export const getCreateArticle = getAllArticles + "/create";

export const getMetaDataUrl = API_URL + "/getmeta";

/* authentication endpoints */

export const getMyProfile = API_URL + "/profile";

export const getSignUpUrl = AUTH_URL + "/signup";

export const getLoginUrl = AUTH_URL + "/login";

export const getForgotPassword = AUTH_URL + "/password/forgot";

export const getResetPassword = AUTH_URL + "/password/reset";

/* get movies */

export const getMovie = (movieId) =>
  `${TMDB_API}/movie/${movieId}?api_key=${API_KEY}`;
export const getPopularMoviesURL = `${TMDB_API}/movie/popular?api_key=${API_KEY}`;

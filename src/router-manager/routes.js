import HomePage from "pages/homepage";
import MoviePage from "pages/movie-page";
import ForgotPasswordPage from "pages/forgot-password-page";
import ResetPasswordPage from "pages/reset-password-page";
import LoginPage from "pages/signin-page";
import SignUpPage from "pages/signup-page";

const createRoute = (path, component, type) => ({
  path,
  component,
  routeType: type,
});

const routes = [
  createRoute("/", HomePage),
  createRoute("/signin", LoginPage, "auth"),
  createRoute("/signup", SignUpPage, "auth"),
  createRoute("/forgot-password", ForgotPasswordPage),
  createRoute("/reset-password", ResetPasswordPage),
  createRoute("/movies/:id", MoviePage),
  //   createRoute("/dashboard/profile", ProfilePage, "admin"),
  //   createRoute("/dashboard/articles", AllArticlesPage, "admin"),
  //   createRoute("/dashboard/articles/create", CreateArticlePage, "admin"),
  //   createRoute("/:username", BoardPage),
];

export default routes;

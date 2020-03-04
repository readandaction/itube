import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteTitle = "Itube";
  res.locals.routes = routes;
  res.locals.user = {
    authenticated: true,
    id: 1
  };
  next();
};

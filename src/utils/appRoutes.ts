export const APP_ROUTES = {
  private: {
    stake: { name: "/stake" },
    projects: { name: "/projects" },
    project: { name: "/projects/[:address]" },
    apply: { name: "/apply" },
  },
  public: {
    home: "/",
    contact: "/contact",
    about: "/about",
  },
}

export const checkIsPublicRoute = (asPath: string) => {
  const appPublicRoutes = Object.values(APP_ROUTES.public)

  return appPublicRoutes.includes(asPath)
}

import { HomeIcon, FilmIcon, TvIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import TVShowsPage from "./pages/TVShowsPage.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Movies",
    to: "/movies",
    icon: <FilmIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "TV Shows",
    to: "/tv-shows",
    icon: <TvIcon className="h-4 w-4" />,
    page: <TVShowsPage />,
  },
];

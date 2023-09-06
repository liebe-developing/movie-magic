import { NavLink, Outlet } from "react-router-dom";

import { Navbar } from "../components";

const RootLayout = ({
  trendingMovies,
  topRatedMovies,
  topRatedSeries,
  upcomingMovies,
  popularSeries,
}) => {
  return (
    <div className="relative dark">
      <Navbar
        trendingMovies={trendingMovies}
        topRatedMovies={topRatedMovies}
        topRatedSeries={topRatedMovies}
        upcomingMovies={upcomingMovies}
        popularSeries={popularSeries}
      />

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;

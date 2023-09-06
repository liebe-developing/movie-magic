import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import RootLayout from "./layouts/RootLayout";
import {
  ForgotPassword,
  Home,
  MoviePage,
  PopularSeriesList,
  Signin,
  Signup,
  TopRatedMoviesList,
  TopRatedSeriesList,
  UpcomingMoviesList,
} from "./pages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/sign-up" element={<Signup />} />
      <Route path="/sign-in" element={<Signin />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path=":id" element={<MoviePage />} />
      <Route path="/top-rated-movies" element={<TopRatedMoviesList />} />
      <Route path="/top-rated-series" element={<TopRatedSeriesList />} />
      <Route path="/upcoming-movies" element={<UpcomingMoviesList />} />
      <Route path="/popular-series" element={<PopularSeriesList />} />
    </Route>
  )
);
export default function App() {
  return <RouterProvider router={router} />;
}

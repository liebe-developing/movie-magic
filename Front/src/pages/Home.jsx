import axios from "axios";
import {
  Hero,
  PopularSeries,
  TopRatedMovies,
  TopRatedSeries,
  UpcomingMovies,
} from "../sections";
import { useQuery } from "@tanstack/react-query";
// import Footer from "../components/Footer";
import { Box, useColorModeValue } from "@chakra-ui/react";

const Home = () => {
  const API_KEY = "a7a2cb2c7b592a825c26e90bd568c352";

  // Trending movies for hero section
  const {
    isLoading,
    data: trendingMovies,
    error,
  } = useQuery({
    queryKey: "trending-movies",
    queryFn: async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}&language=en-US&include_image_languag`
      );
      return data.results;
    },
  });

  // Top-rated movies section
  const { data: topRatedMovies } = useQuery({
    queryKey: "top-rated-movies",
    queryFn: async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US`
      );
      return data.results;
    },
  });

  // Top-rated series section
  const { data: topRatedSeries } = useQuery({
    queryKey: "top-rated-series",
    queryFn: async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=en-US`
      );
      return data.results;
    },
  });

  // Upcoming movies section
  const { data: upcomingMovies } = useQuery({
    queryKey: "upcoming-movies",
    queryFn: async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US`
      );
      return data.results;
    },
  });

  // Popular series section
  const { data: popularSeries } = useQuery({
    queryKey: "popular-series",
    queryFn: async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US`
      );
      return data.results;
    },
  });

  return (
    <>
      <Box className={`sm:h-screen ${useColorModeValue("gray.200", 'bg-hero')} bg-center bg-cover bg-no-repeat bg-opacity-80 shadow-black pt-10 sm:pt-0`}>
        <Hero
          trendingMovies={trendingMovies}
          isLoading={isLoading}
          error={error}
        />
      </Box>
      <Box className="padding-y" >
        <TopRatedMovies topRatedMovies={topRatedMovies} />
        <TopRatedSeries topRatedSeries={topRatedSeries} />
        <UpcomingMovies upcomingMovies={upcomingMovies} />
        <PopularSeries popularSeries={popularSeries} />
      </Box>
    </>
  );
};

export default Home;

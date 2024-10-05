import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../Utils/constants";
import { addTrailerVideo } from "../Utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  //fetch trailer video
  const getMovieTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/videos",
      API_OPTIONS
    );
    const json = await data.json();

    const filteredTrailer = json?.results.filter((x) => x.type === "Trailer");
    const trailer = filteredTrailer.length
      ? filteredTrailer[0]
      : json?.results[0];

    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieTrailer();
  }, []);
};

export default useMovieTrailer;

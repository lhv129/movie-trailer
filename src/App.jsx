import { useState, useEffect } from "react";
import Banner from "./components/Banner";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import MovieSearch from "./components/MovieSearch";

function App() {
  const [movie, setMovie] = useState([]);

  const [movieTopRate, setMovieTopRate] = useState([]);

  const [movieSearch, setMovieSearch] = useState([]);

  const handleSearch = async (searchValue) => {
    setMovieSearch("");
    try {
      const url = `https://api.themoviedb.org/3/search/movie?query=${searchValue}&include_adult=false&language=vi&page=1`;
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      };

      const searchMovie = await fetch(url, options);
      const data = await searchMovie.json();
      setMovieSearch(data.results);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchMovies = async () => {
      const urlPopular =
        "https://api.themoviedb.org/3/movie/popular?language=vi&page=1";
      const urlTopRate =
        "https://api.themoviedb.org/3/movie/top_rated?language=vi&page=3";
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      };

      const [resPopular, resTopRate] = await Promise.all([
        fetch(urlPopular, options),
        fetch(urlTopRate, options),
      ]);

      const dataPopular = await resPopular.json();
      const dataTopRate = await resTopRate.json();

      // console.log(dataPopular);

      setMovie(dataPopular.results);
      setMovieTopRate(dataTopRate.results);
    };

    fetchMovies();
  }, []);

  return (
    <>
      <div className="bg-black pb-10">
        <Header onSearch={handleSearch} />
        <Banner />
        {movieSearch.length > 0 ? (
          <MovieSearch title={"Tìm kiếm"} data={movieSearch} />
        ) : (
          <>
            <MovieList title="Movies Hot" data={movie}>
              {movie.map((item) => (
                <div key={item.id}>{/* Render từng phần tử trong movie */}</div>
              ))}
            </MovieList>
            <MovieList title="Recommend For You" data={movieTopRate}>
              {movieTopRate.map((item) => (
                <div key={item.id}>
                  {/* Render từng phần tử trong movieTopRate */}
                </div>
              ))}
            </MovieList>
          </>
        )}
      </div>
    </>
  );
}

export default App;

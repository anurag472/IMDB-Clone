import axios from "axios";
import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";

const apiKey = "3ad0821bf875247853613c4d6b1eff89";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const getMovies = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}&page=${currentPage}`
    );
    setMovies(response.data.results);
  };
  useEffect(() => {
    getMovies();
  }, [currentPage]);

  const resetPageNo = () => {
    setCurrentPage(1);
  };

  const increasePageNo = () => {
    setCurrentPage(currentPage + 1);
  };

  const decreasePageNo = () => {
    currentPage > 1 && setCurrentPage(currentPage - 1);
  };

  return (
    <div>
      <div className="text-2xl mt-4 mb-8 font-bold text-center">
        Trending Movies
      </div>
      <div className="flex justify-around flex-wrap">
        {movies.map((movie) => {
          return (
            <div
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original/t/p/w500/${movie.poster_path})`,
              }}
              key={movie.id}
              className="overflow-hidden w-[250px] h-[30vh] bg-center bg-cover m-4 md:h-[35vh] md:w-[250px] flex items-end rounded-xl hover:scale-110 duration-300"
            >
              <div className="text-white font-bold text-center w-full bg-gray-900 bg-opacity-60">
                {movie.title}
              </div>
            </div>
          );
        })}
      </div>

      <Pagination
        resetPageNo={resetPageNo}
        decreasePageNo={decreasePageNo}
        increasePageNo={increasePageNo}
        page={currentPage}
      />
    </div>
  );
}

export default Movies;

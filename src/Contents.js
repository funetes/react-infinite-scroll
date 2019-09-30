import React, { useEffect, useState } from "react";
import { getMovies } from "./api";

export default () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const getMovieInfo = async page => {
    try {
      const {
        data: {
          data: { movies }
        }
      } = await getMovies(page);
      setData([...data, ...movies]);
    } catch (error) {
      console.log(error);
    }
  };
  const handleScroll = e => {
    if (
      window.scrollY + document.documentElement.clientHeight ===
      document.documentElement.scrollHeight
    )
      setPage(page + 1);
  };
  useEffect(() => {
    getMovieInfo(page);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [page]);

  return (
    <>
      {data.map(movie => (
        <h5 key={movie.id}>{movie.title}</h5>
      ))}
    </>
  );
};

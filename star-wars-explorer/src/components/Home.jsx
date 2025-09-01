import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  const [films, setFilms] = useState([]);
  const [bef, setBef] = useState({ loading: false, error: false });

  async function fetch() {
    setBef({ ...bef, loading: true });
    try {
      const res = await axios.get("https://swapi.info/api/films");
      setFilms(res.data);
      console.log(res.data);
    } catch (error) {
      setBef({ ...bef, error: true });
    } finally {
      setBef({ ...bef, loading: false });
    }
  }

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div className="flex flex-wrap gap-5 w-[90vw] m-auto mt-5 mb-10 p-5">
      {bef.loading && (
        <p className="flex justify-center items-center h-[90vh] w-[90vw] text-3xl">
          Loading...
        </p>
      )}
      {bef.error && (
        <p className="flex justify-center items-center h-[90vh] w-[90vw] text-3xl">
          Something Went Wrong!
        </p>
      )}
      {films.map((ele, i) => (
        <div
          key={i}
          className="w-1/3 h-80 grid p-10 justify-center items-center m-auto rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-orange-500"
        >
          <p className="text-2xl font-bold">Movie : {ele.title}</p>
          <p className="text-lg font-semibold">Director : {ele.director}</p>
          <p className="text-lg font-semibold">
            Release Date : {ele.release_date}
          </p>
          <p className="text-lg font-semibold">
            Producer : {ele.producer}
          </p>
          <Link to={`/movies/${i+1}`} className="text-xl text-center hover:text-red-600">More Details</Link>
        </div>
      ))}
    </div>
  );
};

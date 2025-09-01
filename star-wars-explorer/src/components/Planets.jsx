import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

export const Planet=()=>{
    const [before,setBefore]=useState({loading:false,error:""})
    const [planets,setPlanets]=useState([])

    async function fetch() {
        setBefore({ ...before, loading: true });
        try {
          const res = await axios.get("https://swapi.info/api/planets");
          setPlanets(res.data);
          console.log(res.data);
        } catch (error) {
          setBefore({ ...before, error: error.message });
        } finally {
          setBefore({ ...before, loading: false });
        }
      }
    
      useEffect(() => {
        fetch();
      }, []);


    return (
        <>
        <div className="flex flex-wrap gap-5 w-[90vw] m-auto mt-5 mb-10 p-5">
        {before.loading && <p className="flex justify-center items-center h-[90vh] w-[90vw] text-3xl">Loading...</p>}
        {before.error && <p className="flex justify-center items-center h-[90vh] w-[90vw] text-3xl">{errlo.error}</p>}
        {planets.map((ele,i)=>(
            <div key={i} className="w-1/3 h-80 grid p-10 justify-center items-center m-auto rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-orange-500">
                <p className="text-xl font-bold">Name : {ele.name}</p>
                <p className="text-lg font-semibold">Population :{ele.population}</p>
                <p className="text-lg font-semibold">Gravity: {ele.gravity}</p>
                <p className="text-lg font-semibold">Terrain : {ele.terrain}</p>
                <Link to={`/planets/${i+1}`} className="text-xl text-center hover:text-red-600">More Details</Link>
            </div>
        ))}
        </div>
        </>
    )
}
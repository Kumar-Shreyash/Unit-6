import axios from "axios";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

export const People=()=>{
    const [errlo,setErrlo]=useState({loading:false,error:""})
    const [people,setPeople]=useState([])

    async function fetch() {
        setErrlo({ ...errlo, loading: true });
        try {
          const res = await axios.get("https://swapi.info/api/people");
          setPeople(res.data);
          console.log(res.data);
        } catch (error) {
          setErrlo({ ...errlo, error: error.message });
        } finally {
          setErrlo({ ...errlo, loading: false });
        }
      }
    
      useEffect(() => {
        fetch();
      }, []);

    return (
        <>
        <div className="flex flex-wrap gap-5 w-[90vw] m-auto mt-5 mb-10 p-5">
        {errlo.loading && <p className="flex justify-center items-center h-[90vh] w-[90vw] text-3xl"> Loading...</p>}
        {errlo.error && <p className="flex justify-center items-center h-[90vh] w-[90vw] text-3xl">{errlo.error}</p>}
        {people.map((ele,i)=>(
            <div key={i} className="w-1/3 h-80 grid p-10 justify-center items-center m-auto rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-orange-500">
                <p className="text-xl font-bold">Name : {ele.name}</p>
                <p className="text-lg font-semibold">Birth Year :{ele.birth_year}</p>
                <p className="text-lg font-semibold">Gender : {ele.gender}</p>
                <p className="text-lg font-semibold">Height : {ele.height}</p>
                <Link to={`/details/${i+1}`} className="text-xl text-center hover:text-red-600">More Details</Link>
            </div>
        ))}
        </div>
        </>
    )
}
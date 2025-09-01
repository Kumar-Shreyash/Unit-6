import { useState } from "react"
import axios from "axios"
import { useEffect } from "react"

export const Home = () => {
    const [films,setFilms]=useState([])
    const [bef,setBef]=useState({loading:false,error:false})

    async function fetch(){
        setBef({...bef,loading:true})
        try {
            const res=await axios.get("https://swapi.info/api/films")
            setFilms(res.data)
            console.log(res.data)
        } catch (error) {
            setBef({...bef,error:true})
        }finally{
            setBef({...bef,loading:false})
        }
    }

    useEffect(()=>{
        fetch()
    },[])

    return (
        <div className="flex flex-wrap gap-5 w-[80vw] m-auto border">
        {bef.loading && <p className="flex justify-center items-center h-[100vh] text-3xl">Loading...</p>}
        {bef.error && <p className="flex justify-center items-center h-[100vh] text-3xl">Something Went Wrong!</p>}
        {films.map((ele,i)=>(
            <div key={i} className="w-1/3">
                <p className="text-xl font-bold">Movie : {ele.title}</p>
                <p>Director : {ele.director}</p>
                <p>Release Date : {ele.release_date}</p>
            </div>
        ))}
        </div>
    )
}
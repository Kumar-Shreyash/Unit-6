import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"

export const Details=()=>{
    const [char,setChar]=useState([])
    const {id}=useParams()
    const [load,setLoad]=useState({loading:false,error:""})

    async function fetch(){
        setLoad({...load,loading:true})
        try {
            const res=await axios.get(`https://swapi.info/api/people/${id}`)
            setChar(res.data)
        } catch (error) {
            setLoad({...load,error:error.message})
        }finally{
        setLoad({...load,loading:false})
        }
    }

    useEffect(()=>{
        fetch()
    },[])

    return (
        <>
        <div>
        {load.loading && <p className="flex justify-center items-center h-[90vh] w-[90vw] text-3xl">Loading...</p>}
        {load.error && <p className="flex justify-center items-center h-[90vh] w-[90vw] text-3xl">{errlo.error}</p>}
        <div className="w-[50vw] m-auto mt-10">
            <p className="text-4xl text-center">Name : {char.name}</p>
            <p className="text-2xl text-center">Gender : {char.gender}</p>
            <p className="text-2xl text-center">Height : {char.height}</p>
            <p className="text-2xl text-center">Hair Color : {char.hair_color}</p>
            <p className="text-2xl text-center">Eye Color : {char.eye_color}</p>
            <p  className="text-2xl text-center">Body Mass : {char.mass}</p>
            <p  className="text-2xl text-center">Total Vehicles : {char.vehicles?char.vehicles.length:0}</p>
            <p  className="text-2xl text-center"> Skin Color : {char.skin_color}</p>
            <p  className="text-2xl text-center">Total Starships : {char.starships?char.starships.length:0}</p>
            <p  className="text-2xl text-center">Films : {char.films?char.films.length:0}</p>
            <p  className="text-2xl text-center">Created : {char.created}</p>
            <p  className="text-2xl text-center">Home World : {char.homeworld}</p>
        </div>
        </div>
        </>
    )
}
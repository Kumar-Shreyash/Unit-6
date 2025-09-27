import axios from "axios"
import { useEffect, useState } from "react"

export const useFetch=(string)=>{
    const [state,setState]=useState({loading:false,error:"",data:[]})

 

    useEffect(()=>{
        async function fetchData(string){
            setState({loading:true, error:"",data:[]})
            try {
                let resp= await axios.get(string)
                let res= await resp.data
                setState({loading:false,data:res,error:""})
            } catch (error) {
                setState({data:[],loading:false, error:error.message})
            }
        }
        if(string){
        fetchData(string)
        }
    },[string])

    return state
}
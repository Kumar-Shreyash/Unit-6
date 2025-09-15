import { createContext, useState } from "react";

export const SearchContext=createContext()

export const SearchProvider=({children})=>{
  const [search,setSearch]=useState("")
  const [history,setHistory]=useState([])
  const [suggestion,setSuggestion]=useState()
  const [data,setData]=useState()

  return(
        <SearchContext.Provider value={{search,setSearch,history,setHistory,suggestion,setSuggestion,data,setData}}>
            {children}
        </SearchContext.Provider>
  )
}
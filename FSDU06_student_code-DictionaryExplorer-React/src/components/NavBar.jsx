import React, { useContext, useRef, useState } from 'react'
import { SearchContext } from '../Context/Context'

export default function NavBar() {
  // const [search,setSearch]=useState("")
  // const [history,setHistory]=useState([])
  const [theme,setTheme]=useState(true)
  const themeRef=useRef()
  const {search,setSearch,history,setHistory,setSuggestion,setData}=useContext(SearchContext)

  async function fetchWord(e){
    const temp=e.target.value
    setSearch(temp)
    try {
      const resp=await fetch(`https://api.datamuse.com/sug?s=${temp}`)
      const res=await resp.json()
      setSuggestion(res)
      console.log(res,search)
    } catch (error) {
      console.log(error.message)
    }
  }

  async function fetchData(){
    try {
      const resp=await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`)
      const res= await resp.json()
      setHistory([...history,search])
      setData(res)
      console.log(res)
    } catch (error) {
      console.log(error.message)
    }
  } 
  


  function handleSearch(e){
    e.preventDefault()
    fetchData()
  }

  return (
    <div className='border-b h-14 flex justify-center items-center gap-10'>
      <form onSubmit={handleSearch}>
      <input className='border w-100 h-9 rounded-2xl p-2'  type="text" placeholder='🔎 Search for a word' value={search} onChange={fetchWord}/>
      </form>
        <button >{theme?"🌒 Dark":"☀️ Light"}</button>
    </div>
  )
}

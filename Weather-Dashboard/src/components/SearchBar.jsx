import { useEffect, useRef } from "react";


export const SearchBox = ({ city, setCity, search }) => {
    const inputRef=useRef()

    useEffect(()=>{
        inputRef.current.focus()
    },[])

  function handleSearch() {
    search();
  }

  return (
    <>
      <input
      ref={inputRef}
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{marginRight:"10px",width:"200px",height:"18px", borderRadius:"10px", padding:"5px"}}
      />
      <button onClick={handleSearch}>Search</button>
    </>
  );
};

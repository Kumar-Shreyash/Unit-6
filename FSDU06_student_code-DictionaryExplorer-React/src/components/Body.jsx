import React, { useContext } from 'react'
import { SearchContext } from '../Context/Context'

export default function Body() {
    const {suggestion,history,data}=useContext(SearchContext)
  return (
    <div>
        <div>
            <h2>Search Results</h2>
            {data?(data.map((ele,i)=>(
                <div key={i}>
                    <h3>{ele.word}{ele.phonetic?ele.phonetic:""}</h3>
                </div>
            ))):(<p>a</p>)}
        </div>
        <div>
            <h2>Suggestions</h2>
            {suggestion?(suggestion.map((ele)=>(
                <div key={ele.score}>
                    <p>{ele.word}</p>
                </div>
            ))):(<p>No Suggestions!</p>)}
        </div>
    </div>
  )
}

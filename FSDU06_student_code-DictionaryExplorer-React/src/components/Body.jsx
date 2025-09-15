import React, { useContext } from 'react'
import { SearchContext } from '../Context/Context'

export default function Body() {
    const {suggestion,history,data}=useContext(SearchContext)
  return (
    <>
    <div className='flex w-[90vw] m-auto'>
        <div className='flex-2/3 '>
            <h2 className='font-bold p-2  text-xl'>Search Results</h2>
            {data.length>0?(data.map((ele,i)=>(
                <div key={i}>
                    <h3 className='ml-4'>{ele.word}{ele.phonetic?ele.phonetic:""}</h3>
                    <div className='flex gap-2'>
                    {ele.meanings.map((ele,i)=>(
                        <div key={i}>
                        <p>{ele.partOfSpeech}</p>
                        </div>
                    ))}
                    </div>
                </div>
            ))):(<p className='ml-4'></p>)}
        </div>
        <div className='flex-1/3'>
            <h2 className='font-bold p-2 text-xl'>Suggestions</h2>
            {suggestion.length>0?(suggestion.map((ele,i)=>(
                <div key={i}>
                    <p className='ml-4'>{ele.word}</p>
                </div>
            ))):(<p className='ml-4'>No Suggestions!</p>)}
        </div>
    </div>
    <div className='fixed bottom-10 w-[90vw] left-15 items-center'>
        <h2 className='font-bold p-2 text-xl block'>Search History</h2>
        <div className='flex gap-10 pl-10'>
        {history.length>0?(history.map((ele,i)=>(
            <div key={i}>
                <p >{ele}</p>
            </div>
        ))):(<p>Nothing Searched!</p>)}
        </div>
        
    </div>
    </>
  )
}

const input=document.getElementById("input")
const searchBtn=document.getElementById("searchBtn")
const display=document.getElementById("display")

const API_KEY="741bd4a1cddde67890715817ddc94f5a"

async function getWeatherbyCoord(lat,lon){
    try {
        const resp=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`)
        const res=await resp.json()
        displayData(res)
    } catch (error) {
        console.log(error.message)
    }
}

async function getWeatherbyCity(){
    const city=input.value
    try {
        const resp=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`)
        const res=await resp.json()
        displayData(res)
    } catch (error) {
        display.innerText=`No city found by ${city}`
    }
}

function displayData(data){
    const {name,main,weather}=data
}
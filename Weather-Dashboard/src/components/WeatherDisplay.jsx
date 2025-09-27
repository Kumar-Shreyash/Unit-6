export const WeatherDisplay=({data,error,loading})=>{
    const hasData=data && data.main && data.weather


    return(
        <>
        {loading && <h3>Loading... Please Wait</h3>}
        {error && <h3>Error : {error}</h3>}
        {hasData?(<div>
            <h2>{data.weather[0].main==="Clouds"?`🌥️ ${data.name}`:`☀️ ${data.name}`}</h2>
            <p>Weather : {data.weather[0].main==="Clouds"?"🌥️Clouds":"☀️Clear"}</p>
            <p>🌡️Temperature : {data.main.temp}</p>
            <p>Humidity : {data.main.humidity}</p>
        </div>):(<h3>Please enter a valid city name</h3>)}
        </>
    )
}
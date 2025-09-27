import { useState } from "react";
import "./App.css";
import { SearchBox } from "./components/SearchBar";
import { useFetch } from "./hooks/useFetch";
import { WeatherDisplay } from "./components/WeatherDisplay";

function App() {
  const [city, setCity] = useState("");
  const API_KEY = "741bd4a1cddde67890715817ddc94f5a";
  const [string, setString] = useState("");
  const { data, loading, error } = useFetch(string);
  const obj={ data, loading, error }
  function search() {
    if (city.trim()) {
      setString(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setCity("")
    }
  }

  return (
    <>
        <h1> 🌤️Quick Weather </h1>
      <SearchBox city={city} setCity={setCity} search={search} />
      <WeatherDisplay data={data} error={error} loading={loading} />
    </>
  );
}

export default App;

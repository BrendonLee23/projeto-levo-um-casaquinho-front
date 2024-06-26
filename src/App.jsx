import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage"
import InfoContext from "./contexts/InfoContext"
import { useState } from "react";


function App() {
  const [weatherData, setWeatherData] = useState();
  const [graphicData, setGraphicData] = useState();
  const [finalGraphicData, setFinalGraphicData] = useState();
  const [isFahrenheit, setIsFahrenheit] = useState(false);
  const [city, setCity] = useState('');
  const apiKey = import.meta.env.VITE_API_KEY
  return (
    <InfoContext.Provider value={{apiKey, weatherData, setWeatherData, graphicData, setGraphicData, city, setCity, isFahrenheit, setIsFahrenheit, finalGraphicData, setFinalGraphicData}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
      </BrowserRouter>
    </InfoContext.Provider>
  )
}

export default App

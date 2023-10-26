import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';

import {HomePage,CityPage} from "./Routes.js";
function App() {
  //console.log(process.env.REACT_APP_OPENWEATHERMAP_API_KEY);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/city/:cityName" element={<CityPage />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;

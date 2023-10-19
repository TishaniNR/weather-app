import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {HomePage,CityPage} from "./Routes.js";
function App() {
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

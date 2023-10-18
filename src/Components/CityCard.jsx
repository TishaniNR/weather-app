import React from 'react'
import CardTopImage from '../Images/CardTopImage.png';

const CityCard = ({ location, temperature, weatherCondition }) => {
  return (
    <div className="max-w-xs mx-auto p-4 rounded-md shadow-md bg-white">
      <div className="text-center">
        <h2 className="text-2xl font-semibold">colombo</h2>
        <p className="text-lg">24°C</p>
      </div>
      <div className="text-center mt-4">
        <img src={CardTopImage} alt="Weather Icon" className="w-16 mx-auto" />
        <p className="text-lg">Sky clear</p>
      </div>
    </div>
  )
}

export default CityCard
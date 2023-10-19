import React from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import background from '../Images/Background.png';
const CityPageCom = () => {
  const { cityName } = useParams();

  return (
    <div className="h-full w-full flex justify-center items-center" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="w-1/2 rounded shadow-lg bg-[#5395e1] m-4 ">
            <a href="/" className="absolute top-2 left-2">
              <div className="text-lg cursor-pointer bg-white p-1 rounded-full">
                <FontAwesomeIcon icon={faArrowLeft} />
              </div>
            </a>
        <div className="px-6 py-4">
          <div className="text-center m-8">
            <h2 className="text-2xl font-semibold text-white">Colombo</h2>
            <h2 className="text-lg text-white">8.54 AM</h2>

            <div className="grid grid-cols-2 gap-4 ">
              <div className="font-bold text-xl text-white mb-2">The Coldest Sunset</div>
              <div className="text-2xl font-bold text-white ">24°C</div>
            </div>

          </div>
      </div>

      <div className=" rounded shadow-lg bg-[#2b3139] justify-center items-center text-white text-center">
        <div className="grid xs:grid-cols-1 md:grid-cols-3 gap-4">
          <div className="m-8 text-center">
            <div className="text-lg font-semibold text-white">Pressure: 1018hPa</div>
            <div className="text-lg font-semibold text-white">Humidity: 78%</div>
            <div className="text-lg font-semibold text-white">Visibility: 8.0km</div>
          </div>

          <div className="m-8 text-center">
            <div className="text-lg font-semibold text-white">4.0m/s Degree</div>

          </div>

          <div className="m-8 text-center">
            <div className="text-lg font-semibold text-white">Sunrise:</div>
            <div className="text-lg font-semibold text-white">Sunset:</div>
          </div>

        </div>
      </div>
      </div>
    </div>

  );
}

export default CityPageCom;
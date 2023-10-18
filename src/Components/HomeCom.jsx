import React from 'react';
import background from '../Images/Background.png';
import CardTopImage from '../Images/CardTopImage.png';


const HomeCom = () => {

 
  return (
    <div className="flex justify-center items-center" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="flex justify-center items-center m-4">
      <a href="/city">
      <button>
      <div className="max-w-sm rounded overflow-hidden shadow-lg m-4  bg-[#363b42] ">
        <img src={CardTopImage} alt="Sunset in the mountains" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            <div className="text-center">
            <h2 className="text-2xl font-semibold">colombo</h2>
            <p className="text-lg">24°C</p>
          </div>
          <div className="text-center mt-4">
            <img src={CardTopImage} alt="Weather Icon" className="w-16 mx-auto" />
            
            <p className="text-lg">Sky clear</p>
          </div>
        </div>
      </div>
      </button>
      </a>

      <a href="/city">
      <button>
      <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-[#363b42]">
        <img src={CardTopImage} alt="Sunset in the mountains" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            <div className="text-center">
            <h2 className="text-2xl font-semibold">colombo</h2>
            <p className="text-lg">24°C</p>
          </div>
          <div className="text-center mt-4">
            <img src={CardTopImage} alt="Weather Icon" className="w-16 mx-auto" />
            
            <p className="text-lg">Sky clear</p>
          </div>
        </div>
      </div>
      </button>
      </a>

      
      </div>

    </div>
  );
};

export default HomeCom;

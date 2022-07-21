import React, { useState, useEffect } from "react";
import axios from "axios";
import bgimage from "./1092587.jpg";
import bgimage2 from "./backgroundimage.jpg";
import bgimage3 from "./backgroundimage3.jpg";
import locicon from "./locationicon3.jpg";
import image01d from "./01d.png";
import image01n from "./01n.png";
import image50d from "./50d.png";
import image50n from "./50n.png";
// More images are there but not imported yet

export default function Weather() {
  const [latitude, setlatitude] = useState();
  const [longitude, setlongitude] = useState(139);

  useEffect(() => {
    async function getData() {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=0ebf0e29926cc939f557a936228e1129`
      );

      console.log(res.data);
      //   console.log(res);
      //   setdatabase(res.data);

      settemperature(Math.floor(res.data.main.temp) - 273); //floor used for rounding
      setfeelslike(Math.floor(res.data.main.feels_like) - 273); //floor used for rounding
      setarea(res.data.name);
      setaboutsky(res.data.weather[0].main);
      setpressure(res.data.main.pressure);
      sethumidity(res.data.main.humidity);
      // console.log(database);
      //   console.log(latitude);
    }

    getData();
  }, [latitude, longitude]);

  //   const [database, setdatabase] = useState([]);
  const [temperature, settemperature] = useState("-");
  const [feelslike, setfeelslike] = useState("-");
  const [aboutsky, setaboutsky] = useState("-");
  const [area, setarea] = useState("area");
  const [humidity, sethumidity] = useState("-");
  const [pressure, setpressure] = useState("-");
  //   const [icon, seticon] = useState("01d");

  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(setPosition, showError);
  } else {
    alert("Error");
  }

  function setPosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    getWeather(latitude, longitude);
  }

  function showError(error) {
    console.log(error);
  }

  function getWeather(latitude, longitude) {
    setlatitude(latitude);
    setlongitude(longitude);
  }

  return (
    <>
      {/* <div>Weather</div> */}
      <div
        className="bg-blue-700 w-100% pt-12 py-96"
        style={{ backgroundImage: `url(${bgimage3})` }}
      >
        <div className="bg-black w-[400px] text-white mx-auto border-4 border-black rounded-3xl">
          <div className="bg-blue-500 border-4 border-black rounded-3xl">
            <div className="bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-80 border-2 border-gray-200 rounded-2xl">
              <div className="flex justify-center py-4 mx-auto font-bold text-xl">
                {/* Weather 
              <div></div><div></div> */}
                <img src={locicon} className="w-7" alt="" />
                {area}
              </div>
              <div className="block pb-4 pl-[6.5rem] font-bold text-2xl">
                <img src={image50d} alt="" />
                {/* <img src={icons} alt="" /> */}
                {/* <img src={`image${icon}`} alt="" /> */}
              </div>
              <div className="block text-center py-2 text-7xl font-bold">
                {temperature}°C
              </div>
              <div className="block text-center font-bold  pb-2 text-3xl">
                {aboutsky}
              </div>
              <div className="block text-center pb-6 text-base">
                Feels like {feelslike}°C
              </div>
            </div>
          </div>
          <div className="flex mx-1 my-2 rounded-2xl bg-gray-900 border-4 border-blue-500 text-center py-4 ">
            <div className="ml-12 text-base">
              <div className="">{pressure} hPa</div>
              <div className="text-xs">Pressure</div>
            </div>
            <div className="ml-20 mr-8">
              <div className="">{humidity} % </div>
              <div className="text-xs">Humidity</div>
            </div>
          </div>

          {/* <div className="block text-center py-2">Mumbai, Maharashtra</div> */}
          {/* <div className="block bg-[#44016b] m-1 rounded-2xl text-white text-center py-4 text-xl">{area}</div> */}
          {/* <div className="block text-center py-2">{database.name}</div> */}
        </div>
      </div>
    </>
  );
}

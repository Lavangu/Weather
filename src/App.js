import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function App() {
  const apiKey = "feb82b92af1417ef4e0d1bad0203cd24";
  const [data, setData] = useState({});
  const [inputCity, setInputCity] = useState("");
  const getWetherDetails = (cityName) => {
    if (!cityName) return;
    const apiURL =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      cityName +
      "&appid=" +
      apiKey;
    axios
      .get(apiURL)
      .then((res) => {
        console.log("response", res);
        setData(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const handleChangeInput = (e) => {
    console.log("value", e.target.value);
    setInputCity(e.target.value);
  };

  const handleSearch = () => {
    getWetherDetails(inputCity);
  };

  return (
    <div className="col-md-12">
      <div className="wetherBg">
        <h1 className="heading">WEATHER APP</h1>;
        <div className="d-grid gap-3 col-4 mt-4">
          <input
            type="text"
            className="form-control"
            value={inputCity}
            onChange={handleChangeInput}
            style={{
              height: "60px",
              width: "600px",
              marginLeft: "220px",
              fontSize: 30,
              fontWeight: 100,
            }}
          />

          <button
            className="btn btn-primary"
            type="button"
            onClick={handleSearch}
            style={{
              height: "60px",
              width: "600px",
              marginLeft: "220px",
              fontSize: "30px",
              fontWeight: 70,
            }}
          >
            Search
          </button>
        </div>
        {Object.keys(data).length > 0 && (
          <div className="col-md-12 text-center  mt-5">
            <div className="shadow rounded wetherResultBox">
              <img
                className="weathorIcon"
                src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png"
              />

              <h5 className="weathorCity"> {data?.name}</h5>
              <h6 className="weathorTemp">
                {(data?.main?.temp - 273.15).toFixed(2)}°C
              </h6>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

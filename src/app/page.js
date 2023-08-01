"use client";

import { useEffect, useState } from "react";
import SearchButtons from '../../components/SearchButtons/SearchButtons';
import ScreenIcon from '../../components/ScreenIcon/ScreenIcon';
import CurrentData from '../../components/CurrentData/CurrentData';
import GradesButtons from '../../components/GradesButtons/GradesButtons';
import Forecast from '../../components/Forecast/Forecast';
import Hightlights from '../../components/Hightlights/Hightlights';
import SearchModal from "../../components/SearchModal/SearchModal";

export default function Home() {
  let lon;
  let lat;
  const KEY = "9d5d3012597b909355a2c3e111416127";
  const [city, setCity] = useState("Lima");
  const [info, setInfo] = useState();
  const [forecast, setForecast] = useState();
  const [interruptor, setInterruptor] = useState(false);

  useEffect(() => {
    const p1 = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${KEY}`);
    const p2 = fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${KEY}`);

    Promise.all([p1, p2]).then(async (values) => {
      const data = await values[0].json();
      const pronostico = await values[1].json();

      setInfo(data);
      setForecast(pronostico);
    });

  }, [city]);

  console.log(info);
  console.log(forecast);
  
  const handleModal = () => {
    setInterruptor(!interruptor);
  }


  const handleLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((posicion) => {
        lon = posicion.coords.longitude;
        lat = posicion.coords.latitude;

        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=es&units=metric&appid=${KEY}`;
        const localForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&lang=es&units=metric&appid=${KEY}`;

        fetch(url)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            setInfo(data);
            console.log(data);
          })
          .catch((error) => {
            console.log(error);
          });
          
          fetch(localForecast)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            setForecast(data);
            console.log(data);
          })
          .catch((error) => {
            console.log(error);
          });

      });
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    // Obtenemos el valor del botón 
    setCity(e.target.value);
    setInterruptor(!interruptor);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    //obtenemos el valor del input
    let busqueda = e.target[0].value;
    busqueda ? setCity(busqueda) : handleLocation();
    //setCity(e.target.value.toLowerCase());
    setInterruptor(!interruptor);
  };

  

  return (
    <main id="main-container">
      <section id="first-container">        
        <SearchButtons handleLocation={handleLocation} handleModal={handleModal} />
        <ScreenIcon climaPrincipal={info && info.weather[0].main} />
        <CurrentData temp={info && info.main.temp} clima={info && info.weather[0].main} location={info && info.name} />
        <SearchModal interruptor={interruptor} handleModal={handleModal} handleClick={handleClick} handleSearch={handleSearch} />
      </section>
      <section id="second-container">
        <GradesButtons />
        <Forecast forecast={forecast && forecast} />
        <Hightlights speed={info && info.wind.speed} deg={info && info.wind.deg} humidity={info && info.main.humidity} visibility={info && info.visibility} pressure={info && info.main.pressure} />
        
        <div id="footer">
          created by <a href="https://linktr.ee/FrancescoGaliano">Francesco Galiano</a> - devChallenges.io
        </div>
      </section>
    </main>
  )
}

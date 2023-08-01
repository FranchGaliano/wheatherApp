import Image from "next/image";
import "./cardForecast.css";

import tormenta from '/public/Thunderstorm.png';
import llovizna from  'public/LightRain.png';
import lluvia from 'public/Shower.png';
import nieve from 'public/Snow.png';
import limpio from 'public/Clear.png';
import atmosfera from 'public/LightCloud.png';
import nubes from 'public/HeavyCloud.png';

const CardForecast = ({forecast, indiceArr, first, units }) => {

    //Obtención de la fecha
    const fecha = new Date(forecast && forecast.list[indiceArr].dt *1000);
    const diaActual = fecha.getDate();

    const weekDay = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let diaSemana = weekDay[fecha.getDay()];

    const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let mesActual = month[fecha.getMonth()];

    //Obtener el valor de temperatura máximo y mínimo de un mismo día
    let min = 1000;
    let max = -1000;
    for (let i = 0; i < 40; i++) {
      let fechaDia = new Date(forecast && forecast.list[i].dt *1000);
      if (diaActual === fechaDia.getDate()){

        if (forecast.list[i].main.temp_max > max ){
          max = forecast.list[i].main.temp_max;
        }

        if (forecast.list[i].main.temp_min < min ){
          min = forecast.list[i].main.temp_min;
        }
      }
    }



    let urlIcono, ancho, alto, alternate;
    const climaPrincipal = forecast && forecast.list[indiceArr].weather[0].main;
    //Para la imagen de ícono a mostrar
    switch (climaPrincipal) {
      case "Thunderstorm":
        urlIcono = tormenta;
        ancho = 203;
        alto = 235;
        alternate = "Thunderstorm Icon";
        break;
      case "Drizzle":
        urlIcono = llovizna;
        ancho = 203;
        alto = 235;
        alternate = "Drizzle Icon";
        break;
      case "Rain":
        urlIcono = lluvia;
        ancho = 202;
        alto = 234;
        alternate = "Rain Icon";
        break;
      case "Snow":
        urlIcono = nieve;
        ancho = 203;
        alto = 169;
        alternate = "Snow Icon";
        break;
      case "Clear":
        urlIcono = limpio;
        ancho = 213;
        alto = 206;
        alternate = "Clear Icon";
        break;
      case "Atmosphere":
        urlIcono = atmosfera;
        ancho = 221;
        alto = 206;
        alternate = "Atmosphere Icon";
        break;
      case "Clouds":
        urlIcono = nubes;
        ancho = 203;
        alto = 150;
        alternate = "Clouds Icon";
        break;
      default:
        urlIcono = tormenta;
        ancho = 203;
        alto = 235;
        alternate = "Thunderstorm Icon";
    }

    //Mostrar Tomorrow si es el primer card
    const cabecera = first ? "Tomorrow" : `${diaSemana}, ${diaActual} ${mesActual}`

  return (
    <div className="fc-card">

        <h4 className="fc-date">{cabecera}</h4>
        <div className="fc-icon">
            <Image id="fc-img" src={urlIcono} width={ancho} height={alto} alt={alternate} />
        </div>
        <div className="fc-temp">
            <span className="fc-max-temp">
                {Math.ceil(max)}{(units==="metric") ? "ºC" : "ºF"}
            </span>
            <span className="fc-min-temp">
                {Math.floor(min)}{(units==="metric") ? "ºC" : "ºF"}
            </span>
        </div>
    </div>
  )
}

export default CardForecast
import Image from 'next/image';
import "./screenIcon.css";
import tormenta from '/public/Thunderstorm.png';
import llovizna from  'public/LightRain.png';
import lluvia from 'public/Shower.png';
import nieve from 'public/Snow.png';
import limpio from 'public/Clear.png';
import atmosfera from 'public/LightCloud.png';
import nubes from 'public/HeavyCloud.png';

const ScreenIcon = ({climaPrincipal}) => {
    
    let urlIcono, ancho, alto, alternate;
    //Para el ícono principal
    switch (climaPrincipal) {
      case "Thunderstorm":
        urlIcono = tormenta;
        ancho = 203;
        alto = 235;
        alternate = "Thunderstorm Icon";
        console.log ("tormenta");
        break;
      case "Drizzle":
        urlIcono = llovizna;
        ancho = 203;
        alto = 235;
        alternate = "Drizzle Icon";
        console.log ("llovizna");
        break;
      case "Rain":
        urlIcono = lluvia;
        ancho = 202;
        alto = 234;
        alternate = "Rain Icon";
        console.log ("lluvia");
        break;
      case "Snow":
        urlIcono = nieve;
        ancho = 203;
        alto = 169;
        alternate = "Snow Icon";
        console.log ("nieve");
        break;
      case "Clear":
        urlIcono = limpio;
        ancho = 213;
        alto = 206;
        alternate = "Clear Icon";
        console.log ("limpio");
        break;
      case "Atmosphere":
        urlIcono = atmosfera;
        ancho = 221;
        alto = 206;
        alternate = "Atmosphere Icon";
        console.log ("atmosfera");
        break;
      case "Clouds":
        urlIcono = nubes;
        ancho = 203;
        alto = 150;
        alternate = "Clouds Icon";
        console.log ("nubes");
        break;
      default:
        urlIcono = tormenta;
        ancho = 203;
        alto = 235;
        alternate = "Thunderstorm Icon";
        console.log ("Por defecto: tormenta");
    }
  return (
    <div id="pantallaIcono">
        <div id="screen-nubes"></div>
        <div id="iconoGrande">
          <Image  src={urlIcono} width={ancho} height={alto} alt={alternate} />
        </div>        
    </div>
  )
}

export default ScreenIcon
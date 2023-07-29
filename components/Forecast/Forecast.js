import Image from "next/image";
import "./forecast.css";
import tormenta from '/public/Thunderstorm.png';
import llovizna from  'public/LightRain.png';
import lluvia from 'public/Shower.png';
import nieve from 'public/Snow.png';
import limpio from 'public/Clear.png';
import atmosfera from 'public/LightCloud.png';
import nubes from 'public/HeavyCloud.png';

const Forecast = ({forecast}) => {
    console.log(forecast.list)
  return (
    <div id="forecast">
        <div className="fc-card">
            <h4 className="fc-date">1</h4>
            <div className="fc-icon">
            <Image src={tormenta} width={55} height={63} alt="icon" />
            </div>
            <div className="fc-temp">
                <span className="fc-max-temp">16ºC</span>
                <span className="fc-min-temp">11ºC</span>
            </div>
        </div>

        <div className="fc-card">
            <h4 className="fc-date">2</h4>
            <div className="fc-icon">
            <Image src={tormenta} width={55} height={63} alt="icon" />
            </div>
            <div className="fc-temp">
                <span className="fc-max-temp">16ºC</span>
                <span className="fc-min-temp">11ºC</span>
            </div>
        </div>

        <div className="fc-card">
            <h4 className="fc-date">3</h4>
            <div className="fc-icon">
            <Image src={tormenta} width={55} height={63} alt="icon" />
            </div>
            <div className="fc-temp">
                <span className="fc-max-temp">16ºC</span>
                <span className="fc-min-temp">11ºC</span>
            </div>
        </div>
        <div className="fc-card">
            <h4 className="fc-date">4</h4>
            <div className="fc-icon">
            <Image src={tormenta} width={55} height={63} alt="icon" />
            </div>
            <div className="fc-temp">
                <span className="fc-max-temp">16ºC</span>
                <span className="fc-min-temp">11ºC</span>
            </div>
        </div>
        <div className="fc-card">
            <h4 className="fc-date">5</h4>
            <div className="fc-icon">
            <Image src={tormenta} width={55} height={63} alt="icon" />
            </div>
            <div className="fc-temp">
                <span className="fc-max-temp">16ºC</span>
                <span className="fc-min-temp">11ºC</span>
            </div>
        </div>
    </div>
  )
}

export default Forecast
import Image from "next/image";
import "./hightlights.css";
import iconNavigation from 'public/icon-navigation.svg';

const Hightlights = ({speed, deg, humidity, visibility, pressure}) => {

    let sectorBrujula = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW", "N"];
    let cardinalDirection = sectorBrujula[(deg / 22.5).toFixed(0)];

  return (
    <div id="hightlights">
        <h3>Today&apos;s Hightlights</h3>
        <div id="hightlights-cards">
            <div className="hl-card">
                <h4 className="hl-title">Wind status</h4>
                <div className="hl-data">
                    <span className="hl-data-num">{Math.round(speed)}</span><span className="hl-unid">mph</span>
                </div>
                <div id="hl-wind-visual">
                    <div id="circle-wind-direction">
                        <Image src={iconNavigation} width={18} height={18} alt="icon-navigation"  style= {{ transform: `rotate(${deg}deg` }} />
                    </div>
                    <span id="wind-direction-text">{cardinalDirection}</span>
                </div>
            </div>
            <div className="hl-card">
                <h4 className="hl-title">Humidity</h4>
                <div className="hl-data">
                    <span className="hl-data-num">{Math.round(humidity)}</span><span className="hl-unid">%</span>
                </div>
                <div id="hl-humidity-visual">
                    <div id="humidity-medida">
                        <span className="humidity-text">0</span>
                        <span className="humidity-text">50</span>
                        <span className="humidity-text">100</span>
                    </div>
                    <div id="humidity-barra">
                        <div id="humidity-value" style= {{  width: `${humidity}%` }} >
                        </div>
                    </div>
                    <div id="humidity-unid">
                        <span className="humidity-text">%</span>
                    </div>
                </div>
            </div>
            <div className="hl-card">
                <h4 className="hl-title">Visibility</h4>
                <div className="hl-data">
                    <span className="hl-data-num">{(visibility/1000).toFixed(1)}</span><span className="hl-unid"> miles</span>
                </div>
            </div>
            <div className="hl-card">
                <h4 className="hl-title">Air Pressure</h4>
                <div className="hl-data">
                    <span className="hl-data-num">{pressure}</span><span className="hl-unid"> mb</span>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Hightlights
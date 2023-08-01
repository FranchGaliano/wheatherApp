import "./forecast.css";
import CardForecast from "./CardForecast/CardForecast";

const Forecast = ({forecast, units}) => {
  return (
    <div id="forecast">
        <CardForecast forecast={forecast} indiceArr={7} units={units} first={true} />
        <CardForecast forecast={forecast} indiceArr={15} units={units} />
        <CardForecast forecast={forecast} indiceArr={23} units={units} />
        <CardForecast forecast={forecast} indiceArr={31} units={units} />
        <CardForecast forecast={forecast} indiceArr={39} units={units} />
    </div>
  )
}

export default Forecast
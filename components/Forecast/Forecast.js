import "./forecast.css";
import CardForecast from "./CardForecast/CardForecast";

const Forecast = ({forecast}) => {
  return (
    <div id="forecast">
        <CardForecast forecast={forecast} indiceArr={7} first={true} />
        <CardForecast forecast={forecast} indiceArr={15} />
        <CardForecast forecast={forecast} indiceArr={23} />
        <CardForecast forecast={forecast} indiceArr={31} />
        <CardForecast forecast={forecast} indiceArr={39} />
    </div>
  )
}

export default Forecast
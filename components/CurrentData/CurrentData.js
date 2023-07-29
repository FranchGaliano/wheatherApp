import Image from 'next/image';
import "./currentData.css";
import iconLocationOn from 'public/location_on.svg';

const CurrentData = ({ temp, clima, location }) => {

    const fecha = new Date();
    const diaActual = fecha.getDate();

    const weekDay = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let diaSemana = weekDay[fecha.getDay()];

    const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let mesActual = month[fecha.getMonth()];

    return (
        <div>
            <div id="temperatura">
                <span id="temp">{Math.round(temp)}</span>
                <span id="temp-unit">ºC</span>
            </div>
            <div id="description">
                {clima}
            </div>
            <div id="date">
                Today • {diaSemana}, {diaActual} {mesActual}
            </div>
            <div id="location">
                <Image id="icon-location-on" src={iconLocationOn} width={24} height={24} alt="icon-location-on" />
                {location}
            </div>
        </div>
    )
}

export default CurrentData
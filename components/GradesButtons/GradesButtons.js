import "./gradesButtons.css";

const GradesButtons = ({handleCelsius, handleFahrenheit}) => {
  return (
    <div id="grades">
        <button href="#" className="btn-grades active" onClick={handleCelsius}>ºC</button>
        <button href="#" className="btn-grades" onClick={handleFahrenheit}>ºF</button>
    </div>
  )
}

export default GradesButtons
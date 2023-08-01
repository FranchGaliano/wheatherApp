import "./gradesButtons.css";

const GradesButtons = ({handleCelsius, handleFahrenheit, units}) => {
  return (
    <div id="grades">
        <button href="#" className={(units==="metric") ? "btn-grades active" : "btn-grades"} onClick={handleCelsius}>ºC</button>
        <button href="#" className={(units==="standard") ? "btn-grades active" : "btn-grades"} onClick={handleFahrenheit}>ºF</button>
    </div>
  )
}

export default GradesButtons
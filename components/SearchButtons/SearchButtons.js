import Image from 'next/image';
import "./searchButtons.css";
import iconLocation from 'public/icon-location.svg';

const SearchButtons = ({handleLocation}) => {

  return (
  <div id="search">
    <button id="btn-search">Search for places</button>
    <button id="btn-location" onClick={handleLocation}>
      <Image id="icon-location" src={iconLocation} width={24} height={24} alt="icon-location" />
    </button>            
  </div>
  )
}

export default SearchButtons
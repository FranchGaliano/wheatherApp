"use client";
import Image from 'next/image';

import { useEffect, useState } from "react";
import SearchButtons from '../../components/SearchButtons/SearchButtons';

export default function Home() {
  const KEY = "9d5d3012597b909355a2c3e111416127";
  const city = "Cusco";
  const [info, setInfo] = useState();

  useEffect(()=>{
    const p1 = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${KEY}`);
    console.log(p1);
    Promise.all([p1]).then(async (values) => {
      const data = await values[0].json();
      setInfo(data);
    });
  }, []);

  console.log(info);
  return (
    <main id="main-container">
      <section id="first-container">
        <SearchButtons />

          
        <div id="main-icon">

        </div>
        <div id="temp">
          {info && info.main.temp}
          <span id="temp-unit">ºC</span>
        </div>
        <div id="description">
{/*           {info && info.weather.description} */}
        </div>
        <div id="date">
          Today .  Fri, 5Jun
        </div>
        <div id="location">
{/*           {info && info.name} */}
        </div>
      </section>
      <section id="seconf-container">
        <div id="grades">
          <button href="#" className="btn-grades">ºC</button>
          <button href="#" className="btn-grades">ºF</button>
        </div>
        <div id="forecast">
          <div className="fc-card">
            <h4 className="fc-date">Tomorrow</h4>
            <div className="fc-icon"></div>
            <div className="fc-temp">
              <p className="fc-max-temp">16ºC</p>
              <p className="fc-min-temp">11ºC</p>
            </div>
          </div>
        </div>
        <div id="hightlights">
          <h3>Today&apos;s Hightlights</h3>
          <div className="hl-card">
            <h4 className="hl-title">titulo</h4>
            <p className="hl-data">95</p><span className="unid">mph</span>
            <div className="hl-visual"></div>
          </div>
        </div>
        <div id="footer">
          created by Francesco Galiano - devChallenges.io
        </div>
      </section>
    </main>
  )
}

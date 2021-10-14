import React from "react";
import "./App.css";

//required images are imported
import Logo from "./asserts/logo.png";
import trophy from "./asserts/1.png";
import photo from "./asserts/2.png";
import appliances from "./asserts/3.png";
import telephone from "./asserts/telephone.png";
import facebook from "./asserts/facebook.svg";
import globe from "./asserts/globe.svg";

function App() {
  return (
    <>
      <div className="main">
        {/* contains logo */}
        <div className="logo align-to-center">
          <div>
            <img src={Logo} alt="Logo" />
          </div>
        </div>
        {/* div divides vertically partition in ration 1:2 */}
        <div className="top-container">
          <div className="left-container">
            <div>
              <img src={trophy} alt="trophy" />
            </div>
          </div>
          <div className="right-container">
            <div>
              <h3>
                C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018
                for the 4th time.
              </h3>
              <ul>
                <li>
                  C.R.I.'s energy efficient products are well recognized by
                  various Government Institutions, as trustworthy products for
                  various projects across the globe to save energy.
                </li>
                <li>
                  C.R.I. is the highest contributor in the country for the
                  projects of EESL (Energy Efficiency Services Limited) to
                  replace the old inefficient pumps with 5 Star rated energy
                  efficient smart pumps with IoT enabled control panel.
                </li>
              </ul>
              <img src={photo} alt="Ceromany" />
              <p>
                Government of India has awarded the{" "}
                <b>"National Energy Conservation Award 2018"</b>. Mr. G.
                Selvaraj, Joint Managing Director of C.R.I. Group received the
                award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri.
                Raj Kumar Singh, Honorable Minister of State.
              </p>
            </div>
          </div>
        </div>
        <div>
          <p>
            INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
            RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
            POWER FOR THE NATION.
          </p>
        </div>

        <div className="appliances align-to-center">
          <img src={appliances} alt="Logo" />
        </div>
        <div className="align-to-center">
          <p>
            Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
            Solar Systems - Motors
          </p>
        </div>
        <hr />
        <div className="align-to-center">
          <h3>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h3>
        </div>
        {/* for categories */}
        <div className="categories">
          <p>CHEMICALS & PROCESS</p>
          <p className="red-color">
            <b> | </b>
          </p>
          <p>POWER</p>
          <p className="red-color">
            <b> | </b>
          </p>
          <p>WATER & WASTE WATER</p>
          <p className="red-color">
            <b> | </b>
          </p>
          <p>OILS & GAS</p>
          <p className="red-color">
            <b> | </b>
          </p>
          <p>PHARMA</p>
          <p className="red-color">
            <b> | </b>
          </p>
          <p>SUGARS & DISTILLERIES</p>
          <p className="red-color">
            <b> | </b>
          </p>
          <p>PAPER & PULP</p>
          <p className="red-color">
            <b> | </b>
          </p>
          <p>MARINE & DEFENCE</p>
          <p className="red-color">
            <b> | </b>
          </p>
          <p>METAL & MINING</p>
          <p className="red-color">
            <b> | </b>
          </p>
          <p>FOOD & BEVERAGE</p>
          <p className="red-color">
            <b> | </b>
          </p>
          <p>PETROCHEMICAL & REFINERIES</p>
          <p className="red-color">
            <b> | </b>
          </p>
          <p>SOLAR</p>
          <p className="red-color">
            <b> | </b>
          </p>
          <p>BUILDING</p>
          <p className="red-color">
            <b> | </b>
          </p>
          <p>HVAC</p>
          <p className="red-color">
            <b> | </b>
          </p>
          <p>FIRE</p>
          <p className="red-color">
            <b> | </b>
          </p>
          <p>FIGHTING</p>
          <p className="red-color">
            <b> | </b>
          </p>
          <p>AGRICULTURE & RESIDENTIAL</p>
        </div>
      </div>
      {/* footer */}
      <div className="contact-footer">
        <div className="card">
          <div>
            <img src={telephone} alt="telephone" />
          </div>
          <div>
            <p>Toll free 1800 200 1234</p>
          </div>
        </div>
        <div className="card">
          <div>
            <img src={facebook} alt="facebook" />
          </div>
          <div>
            <a href="www.facebook.com.cripumps">www.facebook.com.cripumps</a>
          </div>
        </div>
        <div className="card">
          <div>
            <img src={globe} alt="website" />
          </div>
          <div>
            <a href="www.cripumps.com">www.cripumps.com</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

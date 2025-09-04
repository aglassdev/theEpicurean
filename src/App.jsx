import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import Destinations from './Destinations.jsx';
import Methodology from './Methodology.jsx';
import Geranium from './denmark/københavn/Geranium.jsx';
import Albi from './usa/dc/Albi.jsx';
import Bresca from './usa/dc/Bresca.jsx';
import Causa from './usa/dc/Causa.jsx';
import WashingtonDCRestaurants from './usa/dc/Restaurants.jsx';
import ElcieloWashington from './usa/dc/ElcieloWashington.jsx';
import Fiola from './usa/dc/Fiola.jsx';
import Gravitas from './usa/dc/Gravitas.jsx';
import ImperfectoTheChefsTable from './usa/dc/ImperfectoTheChefsTable.jsx';
import Jônt from './usa/dc/Jônt.jsx';
import Kinship from './usa/dc/Kinship.jsx';
import LittlePearl from './usa/dc/LittlePearl.jsx';
import Masseria from './usa/dc/Masseria.jsx';
import Métier from './usa/dc/Métier.jsx';
import Minibar from './usa/dc/Minibar.jsx';
import Mita from './usa/dc/Mita.jsx';
import OmakaseatBarracksRow from './usa/dc/OmakaseatBarracksRow.jsx';
import OysterOyster from './usa/dc/OysterOyster.jsx';
import PineappleandPearls from './usa/dc/PineappleandPearls.jsx';
import Rania from './usa/dc/Rania.jsx';
import RoosterandOwl from './usa/dc/RoosterandOwl.jsx';
import RosesLuxury from './usa/dc/RosesLuxury.jsx';
import SushiNakazawaDC from './usa/dc/SushiNakazawaDC.jsx';
import TheDabney from './usa/dc/TheDabney.jsx';
import Xiquet from './usa/dc/Xiquet.jsx';

import WashingtonVARestaurants from './usa/virginia/washington/Restaurants.jsx';
import InnAtLittleWashington from './usa/virginia/washington/InnAtLittleWashington.jsx';
import PattyOsCafe from './usa/virginia/washington/PattyOsCafe.jsx';

import NOVARestaurants from './usa/virginia/nova/Restaurants.jsx';
import Joon from './usa/virginia/nova/Joon.jsx';
import EllieBird from './usa/virginia/nova/EllieBird.jsx';
import TwoNineFourOneRestaurant from './usa/virginia/nova/2941Restaurant.jsx';
import JacquesBrasserie from './usa/virginia/nova/JacquesBrasserie.jsx';
import LAubergeChezFrancois from './usa/virginia/nova/LAubergeChezFrancois.jsx';



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home.jsx is your landing page - what users see first */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/methodology" element={<Methodology />} />
        
        {/* Denmark Routes */}
        <Route path="/denmark/københavn/geranium" element={<Geranium />} />

        {/* Washington, Virginia Routes */}
        <Route path="/usa/virginia/washington/restaurants" element={<WashingtonVARestaurants />} />
        <Route path="/usa/virginia/washington/innatlittlewashington" element={<InnAtLittleWashington />} />
        <Route path="/usa/virginia/washington/pattyoscafe" element={<PattyOsCafe />} />

        <Route path="/usa/virginia/nova/restaurants" element={<NOVARestaurants />} />
        <Route path="/usa/virginia/nova/joon" element={<Joon />} />
        <Route path="/usa/virginia/nova/elliebird" element={<EllieBird />} />
        <Route path="/usa/virginia/nova/2941restaurant" element={<TwoNineFourOneRestaurant />} />
        <Route path="/usa/virginia/nova/jacquesbrasserie" element={<JacquesBrasserie />} />
        <Route path="/usa/virginia/nova/laubergechezfrancois" element={<LAubergeChezFrancois />} />


        
        {/* Washington, D.C. Routes */}
        <Route path="/usa/dc/restaurants" element={<WashingtonDCRestaurants />} />
        <Route path="/usa/dc/albi" element={<Albi />} />
        <Route path="/usa/dc/bresca" element={<Bresca />} />
        <Route path="/usa/dc/causa" element={<Causa />} />
        <Route path="/usa/dc/elcielowashington" element={<ElcieloWashington />} />
        <Route path="/usa/dc/fiola" element={<Fiola />} />
        <Route path="/usa/dc/gravitas" element={<Gravitas />} />
        <Route path="/usa/dc/imperfectothechefstable" element={<ImperfectoTheChefsTable />} />
        <Route path="/usa/dc/jônt" element={<Jônt />} />
        <Route path="/usa/dc/kinship" element={<Kinship />} />
        <Route path="/usa/dc/littlepearl" element={<LittlePearl />} />
        <Route path="/usa/dc/masseria" element={<Masseria />} />
        <Route path="/usa/dc/métier" element={<Métier />} />
        <Route path="/usa/dc/minibar" element={<Minibar />} />
        <Route path="/usa/dc/mita" element={<Mita />} />
        <Route path="/usa/dc/omakaseatbarracksrow" element={<OmakaseatBarracksRow />} />
        <Route path="/usa/dc/oysteroyster" element={<OysterOyster />} />
        <Route path="/usa/dc/pineappleandpearls" element={<PineappleandPearls />} />
        <Route path="/usa/dc/rania" element={<Rania />} />
        <Route path="/usa/dc/roosterandowl" element={<RoosterandOwl />} />
        <Route path="/usa/dc/rosesluxury" element={<RosesLuxury />} />
        <Route path="/usa/dc/sushinakazawadc" element={<SushiNakazawaDC />} />
        <Route path="/usa/dc/thedabney" element={<TheDabney />} />
        <Route path="/usa/dc/xiquet" element={<Xiquet />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
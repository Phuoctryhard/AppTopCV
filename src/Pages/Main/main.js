// Main.js
import React from 'react';
import { Routes, Route ,Outlet} from 'react-router-dom';
import Sidebar from "../../Component/Sidebar";
import Topbar from '../../Component/Topbar/index';
import Home from '../../Pages/Home/index';
import Recruitment from '../../Pages/Recruitment/index';
import Analytics from '../../Pages/Analitics/index';
import Detail from '../../Pages/Detail/index';

function Main() {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
}

export default Main;

// <Routes> 
// <Route path="/home" element={<Home />} />
// <Route path="/recruitment" element={<Recruitment />} />
// <Route path="/analytics" element={<Analytics />} />
// <Route path="/detail" element={<Detail />} />
// </Routes>
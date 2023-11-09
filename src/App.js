// App.js
import './App.css';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Login from './Pages/login/login';
import Main from './Pages/Main/main';
import Home from './Pages/Home/index';
import Recruitment from './Pages/Recruitment';
import Analytics from './Pages/Analitics/index';
import Detail from './Pages/Detail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Main />}>
          {/* Các Route con của Main */}
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/recruitment" element={<Recruitment />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/detail" element={<Detail />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

// day la 1 trang 
// <div>
// <Topbar />
// <div className="container">
//   <Sidebar />
//   <Routes>
//   <Route path="/" element={<Home />} />
//   <Route path="/home" element={<Home />} />
//   <Route path="/recruitment" element={<Recruitment />} />
//   <Route path="/analytics" element={<Analytics/>} />    
//   <Route path="/detail" element={<Detail/>} /> 
//   </Routes>
// </div>
// </div>


// import Sidebar from './Component/Sidebar/index';
// import Topbar from './Component/Topbar/index';
// import Home from './Pages/Home';
// import Recruitment from './Pages/Recruitment';
// import Analytics from './Pages/Analitics';
// import Detail from './Pages/Detail';
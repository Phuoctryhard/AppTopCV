import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Component/Sidebar/index';
import Topbar from './Component/Topbar/index';
import Home from './Pages/Home';
import Recruitment from './Pages/Recruitment';
import Analytics from './Pages/Analitics';
import Detail from './Pages/Detail';
function App() {
  return (
    <Router>
      <div>
        <Topbar />
        <div className="container">
          <Sidebar />
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/recruitment" element={<Recruitment />} />
          <Route path="/analytics" element={<Analytics/>} />
          <Route path="/detail" element={<Detail/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

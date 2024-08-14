import Home from './pages/home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/gestordetrafego" element={<Home />} />
          <Route path="/notopodaspesquisas" element={<Home />} />
          <Route path="/webdesign" element={<Home />} />
          <Route path="/equipe" element={<Home />} />
        </Routes>
    </Router>
  );
}
export default App

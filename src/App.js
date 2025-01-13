import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Banner from "./components/Banner";
import Home from "./components/Home";
import Apropos from "./components/A-propos";
import Error404 from "./components/Error_404";
import Logement from "./components/Fiche-logement";

function App() {
  return (
    <Router>
      <Banner />
      <nav>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/a-propos">A propos</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<Apropos />} />
        <Route path="/fiche-logement/:id" element={<Logement />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;

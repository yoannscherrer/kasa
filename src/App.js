import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Apropos from "./components/A-propos";
import Error404 from "./components/Error_404";
import Logement from "./components/Fiche-logement";

function App() {
  return (
    <Router>
      <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<Apropos />} />
        <Route path="/fiche-logement/:id" element={<Logement />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      </Layout>
    </Router>
  );
}

export default App;

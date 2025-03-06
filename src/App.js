import { Navigate, BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Apropos from "./pages/A-propos";
import Error404 from "./pages/Error_404";
import Logement from "./pages/Fiche-logement";
import RouteValidator from "./components/RouteValidator";
import logements from "./logements.json";

function App() {
  const validIds = logements.map((logement) => logement.id);

  return (
    <Router>
      <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<Apropos />} />
        <Route
            path="/logement/:id"
            element={
              <RouteValidator validIds={validIds}>
                <Logement />
              </RouteValidator>
            }
          />
        <Route path="/404" element={<Error404 />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
      </Layout>
    </Router>
  );
}

export default App;

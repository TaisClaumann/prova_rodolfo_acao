import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AcaoPage from "./pages/AcaoPage";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AcaoPage />} />
      </Routes>
    </Router>
  );
};

export default App;

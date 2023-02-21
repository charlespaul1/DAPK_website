import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import RegistrationPage from "./pages/RegistrationPage";
import MultimediaPage from "./pages/MultimediaPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <Router>
     <Routes>
     <Route exact path="/" element={<HomePage />}/>
      <Route path="/about" element={<AboutPage />}/>
      <Route path="/registration" element={<RegistrationPage />}/>
      <Route path="/multimedia" element={<MultimediaPage />}/>
      <Route path="/contact" element={<ContactPage />}/>
     </Routes>
    </Router>
  );
}

export default App;

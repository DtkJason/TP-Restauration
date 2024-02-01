import "./App.css";

import Accueil from "./pages/Accueil";
import Menu from "./pages/Menu";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" Component={Accueil}></Route>
          <Route path="/Menu" Component={Menu}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

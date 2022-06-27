import "./App.css";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";
import Index from "./Pages/Home/Index";
import { Route, Routes } from "react-router-dom";
import Mint from "./Pages/Mint/Mint";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path={"/"} element={<Index />} />
        <Route path={"/Mint"} element={<Mint />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

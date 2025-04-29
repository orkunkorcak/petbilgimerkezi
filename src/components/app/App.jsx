import { Routes, Route } from "react-router-dom";
import HomePage from "../../pages/home/HomePage";
import Footer from "../footer/Footer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;

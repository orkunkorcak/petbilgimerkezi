import { Routes, Route } from "react-router-dom";
import HomePage from "../../pages/home/HomePage";
import Footer from "../footer/Footer";
import UcaklaSeyehat from "../../pages/ucaklaSeyehat/UcaklaSeyehat";
import MikrocipVePasaport from "../../pages/mikrocipVePasaport/MikrocipVePasaport";
import AsilamaTakvimi from "../../pages/asilamaTavkimi/AsilamaTakvimi";
import TitrasyonTesti from "../../pages/titrasyonTesti/TitrasyonTesti";
import NotFoundPage from "../../pages/notFoundPage/NotFoundPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ucakla-seyehat" element={<UcaklaSeyehat />} />       
         <Route path="/mikrocip-ve-pasaport" element={<MikrocipVePasaport />} /> 
        <Route path="/asilama-takvimi" element={<AsilamaTakvimi />} />
        <Route path="/kuduz-titrasyon-testi" element={<TitrasyonTesti />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

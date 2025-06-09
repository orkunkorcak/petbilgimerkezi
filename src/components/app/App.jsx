import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import NotFoundPage from "../../pages/notFoundPage/NotFoundPage";

const HomePage = lazy(() => import("../../pages/home/HomePage"));
const Footer = lazy(() => import("../footer/Footer"));
const UcaklaSeyehat = lazy(() =>
  import("../../pages/ucaklaSeyehat/UcaklaSeyehat")
);
const MikrocipVePasaport = lazy(() =>
  import("../../pages/mikrocipVePasaport/MikrocipVePasaport")
);
const AsilamaTakvimi = lazy(() =>
  import("../../pages/asilamaTavkimi/AsilamaTakvimi")
);
const TitrasyonTesti = lazy(() =>
  import("../../pages/titrasyonTesti/TitrasyonTesti")
);
const CatPage = lazy(() => import("../../pages/kedi/CatPage"));
const DogPage = lazy(() => import("../../pages/köpek/DogPage"));

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ucakla-seyehat" element={<UcaklaSeyehat />} />
          <Route
            path="/mikrocip-ve-pasaport"
            element={<MikrocipVePasaport />}
          />
          <Route path="/asilama-takvimi" element={<AsilamaTakvimi />} />
          <Route path="/kuduz-titrasyon-testi" element={<TitrasyonTesti />} />
          <Route path="/kedi" element={<CatPage />} />
          <Route path="/kopek" element={<DogPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;

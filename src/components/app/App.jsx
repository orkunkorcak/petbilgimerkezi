import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { lazy, useState } from "react";
import NotFoundPage from "../../pages/notFoundPage/NotFoundPage";
import ScrollToTop from "../../utils/ScrollToTop";
import Loader from "../loader/Loader";
import { Toaster } from "react-hot-toast";

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
const CatVaccinationSchedule = lazy(() =>
  import("../allTopics/CatVaccinationSchedule")
);
const VisitWithCat = lazy(() =>
  import("../allTopics/VisitWithCat")
);
const AbroadWithCat = lazy(() =>
  import("../allTopics/AbroadWithCat")
);
const CatSterilization = lazy(() =>
  import("../allTopics/CatSterilization")
);
const DogPage = lazy(() => import("../../pages/köpek/DogPage"));
const DogVaccinationSchedule = lazy(() =>
  import("../allTopics/DogVaccinationSchedule")
);
const VisitWithDog = lazy(() =>
  import("../allTopics/VisitWithDog")
);
const AbroadWithDog = lazy(() =>
  import("../allTopics/AbroadWithDog")
);
const DogSterilization = lazy(() =>
  import("../allTopics/DogSterilization")
);

function App() {
  // BUG: isLoading hep true, uygulama sürekli loader'da kalır
  // const [isLoading] = useState(true);

  // if (isLoading) {
  //   return <Loader />;
  // }
  return (
    <>
      <Suspense fallback={<Loader />}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ucakla-seyehat" element={<UcaklaSeyehat />} />
          <Route
            path="/mikrocip-ve-pasaport"
            element={<MikrocipVePasaport />}
          />
          <Route path="/asilama-takvimi" element={<AsilamaTakvimi />} />
          <Route path="/kuduz-titrasyon-testi" element={<TitrasyonTesti />} />
          <Route path="/kedi" element={<CatPage />}></Route>
          <Route
            path="/kedi-asi-takvimi"
            element={<CatVaccinationSchedule />}
          />
          <Route
            path="/kediyle-veteriner-ziyareti"
            element={<VisitWithCat />}
          />
          <Route
            path="/kediyle-yurtdisina-cikmak"
            element={<AbroadWithCat />}
          />
          <Route path="/kedi-kisirlastirmak" element={<CatSterilization />} />
          <Route path="/kopek" element={<DogPage />}></Route>
          <Route
            path="/kopek-asi-takvimi"
            element={<DogVaccinationSchedule />}
          />
          <Route
            path="/kopekle-veteriner-ziyareti"
            element={<VisitWithDog />}
          />
          <Route
            path="/kopekle-yurtdisina-cikmak"
            element={<AbroadWithDog />}
          />
          <Route path="/kopek-kisirlastirmak" element={<DogSterilization />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <Footer />
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

export default App;

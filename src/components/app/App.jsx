import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { lazy, useState } from "react";
import NotFoundPage from "../../pages/notFoundPage/NotFoundPage";
import ScrollToTop from "../../utils/ScrollToTop";
import Loader from "../loader/Loader";
import { Toaster } from "react-hot-toast";
import { refreshUser } from "../../redux/auth/operations";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectIsRefreshing } from "../../redux/auth/selectors";
import PrivateRoute from "../../routes/PrivateRoute";


const HomePage = lazy(() => import("../../pages/home/HomePage"));
const ProfilePage = lazy(() => import("../../pages/profil/ProfilPage"));
const MyProfile = lazy(() => import("../../components/profile/MyProfile"));
const PetProfile = lazy(() => import("../profile/PetProfile"));
const ForgotPassword = lazy(() =>
  import("../../pages/sifremiUnuttum/ForgotPassword")
); 
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
const VisitWithCat = lazy(() => import("../allTopics/VisitWithCat"));
const AbroadWithCat = lazy(() => import("../allTopics/AbroadWithCat"));
const CatSterilization = lazy(() => import("../allTopics/CatSterilization"));
const DogPage = lazy(() => import("../../pages/köpek/DogPage"));
const DogVaccinationSchedule = lazy(() =>
  import("../allTopics/DogVaccinationSchedule")
);
const VisitWithDog = lazy(() => import("../allTopics/VisitWithDog"));
const AbroadWithDog = lazy(() => import("../allTopics/AbroadWithDog"));
const DogSterilization = lazy(() => import("../allTopics/DogSterilization"));

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth);
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    // Cookie backend'de ama accessToken yoksa (örneğin sayfa yenilenmişse)
    // sadece user varsa refreshUser() çağrısı yap
    if (storedUser) {
      dispatch(refreshUser());
    }
  }, [dispatch]);

  if (isRefreshing) return <Loader />;
  return (
    <>
      <Suspense fallback={<Loader />}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <ProfilePage />
              </PrivateRoute>
            }
          >
            <Route path="myProfile" element={<MyProfile />} />
            <Route path="petProfile" element={<PetProfile />} />
          </Route>
          <Route path="/sifremi-unuttum" element={<ForgotPassword />} />
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

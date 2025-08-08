import Navigation from "../../components/navigation/Navigation";
import CatPageContent from "../../components/catPageContent/CatPageContent";
import { Outlet } from "react-router-dom";

const CatPage = () => {
  return (
    <>
      <Navigation />
      <h1>Kedi Sayfası</h1>
      <CatPageContent />
      <Outlet />
    </>
  );
}
export default CatPage;
import Navigation from "../../components/navigation/Navigation";
import CatPageContent from "../../components/catPageContent/CatPageContent";
import { Outlet } from "react-router-dom";
import css from "../../components/allTopics/allTopics.module.css";


const CatPage = () => {
  return (
    <>
      <Navigation />
      <h1 className={css.h1}>Kedi Bilgi Merkezi</h1>
      <CatPageContent />
      <Outlet />
    </>
  );
}
export default CatPage;
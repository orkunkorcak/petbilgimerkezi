import Navigation from "../../components/navigation/Navigation";
import DogPageContent from "../../components/dogPageContent/DogPageContent";
import { Outlet } from "react-router-dom";
import css from "../../components/allTopics/allTopics.module.css";

const DogPage = () => {
  return (
    <>
      <Navigation />
      <h1 className={css.h1}>Köpek Bilgi Merkezi</h1>
      <DogPageContent />
      <Outlet />
    </>
  );
}
export default DogPage;
import Navigation from "../../components/navigation/Navigation";
import DogPageContent from "../../components/dogPageContent/DogPageContent";
import { Outlet } from "react-router-dom";


const DogPage = () => {
  return (
    <>
      <Navigation />
      <h1>Köpek Sayfası</h1>
      <DogPageContent />
      <Outlet />
    </>
  );
}
export default DogPage;
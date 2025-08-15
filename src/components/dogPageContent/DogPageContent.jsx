import { Link } from "react-router-dom";
import css from "../allTopics/allTopics.module.css";

const DogPageContent = () => {
  return (
    <>
      <div>
        <Link to="/kopek-asi-takvimi">Köpek Aşı Takvimi</Link>
        <h2 className={css.h2}>Yeni konular çok yakında...</h2>
      </div>
    </>
  );
}
export default DogPageContent;
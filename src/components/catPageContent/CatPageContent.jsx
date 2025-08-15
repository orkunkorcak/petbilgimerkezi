import css from "../allTopics/allTopics.module.css";
import { Link } from "react-router-dom";

const CatPageContent = () => {
  return (
    <>
      
      <Link to= "/kedi-asi-takvimi">Kedi Aşı Takvimi</Link>
        
      <h2 className={css.h2}>Yeni konular çok yakında...</h2>
    
    </>
  );
}
export default CatPageContent;
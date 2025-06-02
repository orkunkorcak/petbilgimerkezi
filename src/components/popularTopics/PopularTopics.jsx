import css from "./PopularTopics.module.css";
import { Link } from "react-router-dom";

const PopularTopics = () => {
  return (
    <>
      <h2 className={css.popularTopic}> POPÜLER KONULAR</h2>
      <div className={css.card}>
        <Link to="/ucakla-seyehat" className={css.cardItems}>
          <h3 className={css.cardTitle}>Uçakla Seyehat</h3>
          <img
            className={css.cardImage}
            src="/images/seyehat.png"
            alt="seyehat"
          />
        </Link>
        <Link to="/mikrocip-ve-pasaport" className={css.cardItems}>
          <h3 className={css.cardTitle}>Mikroçip ve Pasaport</h3>
          <img
            className={css.cardImage}
            src="/images/kimlik.png"
            alt="mikroçip ve pasaport"
          />
        </Link>
        <Link to="/asilama-takvimi" className={css.cardItems}>
          <h3 className={css.cardTitle}>Aşılama Takvimi</h3>
          <img className={css.cardImage} src="/images/asi.png" alt="aşılama" />
        </Link>
        <Link to="/kuduz-titrasyon-testi" className={css.cardItems}>
          <h3 className={css.cardTitle}>Kuduz Titrasyon Testi</h3>
          <img
            className={css.cardImage}
            src="/images/titrasyon.png"
            alt="titrasyon"
          />
        </Link>
      </div>
    </>
  );
};
export default PopularTopics;

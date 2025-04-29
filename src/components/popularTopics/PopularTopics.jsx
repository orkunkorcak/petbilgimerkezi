import css from "./PopularTopics.module.css";

const PopularTopics = () => {
  return (
    <>
      <h2 className={css.popularTopic}> POPÜLER KONULAR</h2>
      <div className={css.card}>
        <div className={css.cardItems}>
          <h3 className={css.cardTitle}>Uçakla Seyehat</h3>
        </div>
        <div className={css.cardItems}>
          <h3 className={css.cardTitle}>Mikroçip ve Pasaport</h3>
        </div>
        <div className={css.cardItems}>
          <h3 className={css.cardTitle}>Aşılama Takvimi</h3>
        </div>
      </div>
    </>
  );
};
export default PopularTopics;

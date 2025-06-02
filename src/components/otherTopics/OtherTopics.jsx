import css from "./OtherTopics.module.css";

const OtherTopics = () => {
  return (
    <>
      <div className={css.otherTopics}>
        <h2 className={css.title}>TÜM KONULAR</h2>
        <div className={css.card}>
          <img
            className={css.image}
            src="../../../public/images/cat-category.png"
            alt="kedi"
          />
          <img
            className={css.image}
            src="../../../public/images/dog-category.png"
            alt="köpek"
          />
        </div>
      </div>
    </>
  );
};
export default OtherTopics;

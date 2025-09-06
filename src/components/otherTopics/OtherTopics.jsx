import css from "./OtherTopics.module.css";
import { Link } from "react-router-dom";

const OtherTopics = () => {
  return (
    <>
      <div className={css.otherTopics}>
        <h2 className={css.title}>TÜM KONULAR</h2>
        <div className={css.card}>
          <Link to="/kedi">
            <img
              className={css.image}
              src="/images/cat-category.png"
              alt="kedi"
            />
          </Link>
          <Link to="/kopek">
            <img
              className={css.image}
              src="/images/dog-category.png"
              alt="köpek"
            />
          </Link>
        </div>
      </div>
    </>
  );
};
export default OtherTopics;

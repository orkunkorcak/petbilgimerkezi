import { motion } from "framer-motion";
import css from "./loader.module.css";

const Loader = () => {
    return (
      <>
        <div className={css.loader}>
          <div className={css.container}>
            <motion.img
              src="/images/pbm-loader.png"
              alt="loader"
              className={css.loaderImg}
              style={{ transformOrigin: "center" }}
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
            />
            <h2 className={css.h2}>Yükleniyor...</h2>
          </div>
        </div>
      </>
    );
};

export default Loader;

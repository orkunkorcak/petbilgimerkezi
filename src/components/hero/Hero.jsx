import css from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={css.heroSection}>
      <div className={css.heroContent}>
        <h1 className={css.heroTitle}>
          Evcil dostlarınız için en doğru bilgi kaynağı!
        </h1>
        <img
          className={css.heroImage}
          src="/images/hero-img.png"
          alt="heroImage"
        />
      </div>
    </section>
  );
};
export default Hero;

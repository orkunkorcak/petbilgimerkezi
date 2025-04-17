import css from "./CommingSoon.module.css";

function CommingSoon() {
  return (
    <>
      <div className={css.blurOverlay}>
        <div className={css.blurOverlayContent}></div>
        <img
          src="../../../src/images/pbm-logo.png"
          alt="logo"
          className={css.logoBlur}
        />
        <h1 className={css.blurOverlayTitle}>Çok Yakında Başlıyoruz!</h1>
      </div>
      <header>
        <nav className={css.navbar}>
          <img
            src="../../../src/images/pbm-logo.png"
            alt="logo"
            className={css.logo}
          />
          <button className={css.registerButton}>Kayıt Ol / Giriş Yap</button>
        </nav>
      </header>
      <main>
        <section className={css.heroSection}>
          <div className={css.heroContent}>
            <h1 className={css.heroTitle}>
              Evcil dostlarınız için en doğru bilgi kaynağı!
            </h1>
            <img
              className={css.heroImage}
              src="../../../src/images/hero-img.png"
              alt="heroImage"
            />
          </div>
        </section>
      </main>
      <footer>
        <p>&copy; 2025 Developer By Orkun Korçak</p>
      </footer>
    </>
  );
}

export default CommingSoon;

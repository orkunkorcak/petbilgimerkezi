import css from "./Footer.module.css";

const Footer = () => {
    return (
      <footer className={css.footer}>
        <p>
          Bu sitedeki içerikler sadece bilgilendirme amaçlıdır ve bir uzmana
          danışılmalıdır.
        </p>
        <p>
          İletişim için{" "}
          <a href="mailto:petbilgimerkezi@gmail.com">
            petbilgimerkezi@gmail.com
          </a>
        </p>
        <p>
          &copy; 2025 Developer{" "}
            <a href="https://www.linkedin.com/in/orkun-kor%C3%A7ak-81a096321/">
              Orkun Korçak
          </a>
        </p>
      </footer>
    );
}
    
export default Footer;
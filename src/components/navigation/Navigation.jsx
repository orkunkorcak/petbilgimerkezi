import { Link } from "react-router-dom";
import css from "./Navigation.module.css";
// import clsx from "clsx";

function Navigation() {
  // const buildLinkClass = ({ isActive }) => {
  //   return clsx(css.link, isActive && css.active);
  //};
  return (
    <header>
      <nav className={css.navBar}>
        <Link to="/">
          <img src="/images/pbm-logo.png" alt="logo" className={css.logo} />
        </Link>
        <button className={css.registerButton}>Kayıt Ol / Giriş Yap</button>
      </nav>
    </header>
  );
}
export default Navigation;

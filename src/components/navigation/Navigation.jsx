import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import clsx from 'clsx';

function Navigation() {
    const buildLinkClass = ({ isActive }) => {
        return clsx(css.link, isActive && css.active);
    };
    return (
      <header>
        <nav className={css.navBar}>
          <img src="/images/pbm-logo.png" alt="logo" className={css.logo} />
          <NavLink to="/" className={buildLinkClass}>
            Home
          </NavLink>
          <button className={css.registerButton}>Kayıt Ol / Giriş Yap</button>
        </nav>
      </header>
    );
}
export default Navigation;
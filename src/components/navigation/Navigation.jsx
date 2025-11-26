import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState, useRef } from "react";
import { logoutUser } from "../../redux/auth/operations";
import LoginModal from "../loginModal/LoginModal";
import { Link } from "react-router-dom";
import css from "./Navigation.module.css";

function Navigation() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Dropdown dışına tıklanınca kapatma
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const openModal = () => setLoginModalOpen(true);
  const closeModal = () => setLoginModalOpen(false);

  const handleLogout = () => {
    dispatch(logoutUser());
    setDropdownOpen(false);
  };

  return (
    <header>
      <nav className={css.navBar}>
        <Link to="/">
          <img src="/images/pbm-logo.png" alt="logo" className={css.logo} />
        </Link>

        <div className={css.navRight} ref={dropdownRef}>
          <button
            className={css.registerButton}
            onClick={() => {
              if (auth.isLoggedIn) setDropdownOpen((prev) => !prev);
              else openModal();
            }}
          >
            {auth.isLoggedIn
              ? `Merhaba, ${auth.user.name}`
              : "Kayıt Ol / Giriş Yap"}
          </button>

          {auth.isLoggedIn && isDropdownOpen && (
            <div className={css.dropdownMenu}>
              <Link to="/profile" className={css.dropdownItem}>
                Profilim
              </Link>
              <button onClick={handleLogout} className={css.dropdownItem}>
                Çıkış
              </button>
            </div>
          )}
        </div>
      </nav>

      <LoginModal isOpen={isLoginModalOpen} onClose={closeModal} />
    </header>
  );
}

export default Navigation;

import { Link } from "react-router-dom";
import css from "./Navigation.module.css";
import LoginModal from "../loginModal/LoginModal";
import { useState } from "react";

function Navigation() {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const openModal = () => {
    setLoginModalOpen(true);
  };
  const closeModal = () => {
    setLoginModalOpen(false);
  };

 
  return (
    <header>
      <nav className={css.navBar}>
        <Link to="/">
          <img src="/images/pbm-logo.png" alt="logo" className={css.logo} />
        </Link>
        <button className={css.registerButton} onClick={openModal}>Kayıt Ol / Giriş Yap</button>
      </nav>
      <LoginModal isOpen={isLoginModalOpen} onClose={closeModal} />
    </header>
  );
}
export default Navigation;

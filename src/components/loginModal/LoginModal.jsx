import css from './LoginModal.module.css';
import { useEffect } from 'react';


const LoginModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    } return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };
  if (!isOpen) return null;
  return (
    <div className={css.modal} onClick={handleOverlayClick}>
      <div className={css.modalContent}>
        <img src="/images/pbm-logo.png" alt="Logo" className={css.logo} />
        <h2 className={css.title}>ÇOK YAKINDA ÜYELİK SİSTEMİ AKTİF OLACAKTIR</h2>
     </div>
    </div>
  );
}
export default LoginModal;
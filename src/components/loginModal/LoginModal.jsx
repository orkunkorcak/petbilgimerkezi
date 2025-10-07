import css from "./LoginModal.module.css";
import { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { loginUser } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";

// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";

const LoginModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const isLoggedIn = useSelector(selectIsLoggedIn);

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("*Required"),
    password: Yup.string()
      .min(6, "Must be at least 6 characters")
      .required("*Required"),
  });

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };
  if (!isOpen) return null;

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      await dispatch(loginUser(values));
      onClose();
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <div className={css.modal} onClick={handleOverlayClick}>
      <div className={css.modalContent}>
        <h2 className={css.title}>Giriş Yap</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className={css.form}>
              <div className={css.field}>
                <label htmlFor="email">E-mail </label>
                <Field type="email" name="email" className={css.input} />
                <ErrorMessage
                  name="email"
                  component="div"
                  className={css.error}
                />
              </div>
              <div className={css.field}>
                <label htmlFor="password">Şifre</label>
                <Field type="password" name="password" className={css.input} />
                <ErrorMessage
                  name="password"
                  component="div"
                  className={css.error}
                />
              </div>
              <div className={css.buttons}>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={css.buttonLgn}
                >
                  {isSubmitting ? "Hoşgeldiniz..." : "Giriş yap"}
                </button>
                <button
                  type="button"
                  className={css.buttonRgs}
                  onClick={() => navigate("/register")}
                >
                  Kayıt Ol
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
export default LoginModal;

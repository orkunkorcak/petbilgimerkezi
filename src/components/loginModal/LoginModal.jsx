import css from "./LoginModal.module.css";
import { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  loginUser,
  registerUser,
  refreshUser,
} from "../../redux/auth/operations";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

const LoginModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const [mode, setMode] = useState("login");

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) onClose();
  };

  if (!isOpen) return null;

  // === Login ===
  const loginSchema = Yup.object({
    email: Yup.string().email("Geçersiz e-posta").required("*Gerekli"),
    password: Yup.string()
      .min(6, "En az 6 karakter olmalı")
      .required("*Gerekli"),
  });

  // Artık burada response.user ve response.token var
  // if (response?.user && response?.token) {
  //   localStorage.setItem("user", JSON.stringify(response.user));
  //   localStorage.setItem("token", response.token);
  // }
  const handleLogin = async (values, { setSubmitting }) => {
    try {
      const response = await dispatch(loginUser(values)).unwrap();
      console.log("Login response in component:", response); // debug

      // artık redux state güncellendi; localStorage opsiyonel
      toast.success(`Hoş geldiniz, ${response.user?.name || "kullanıcı"}!`);
      onClose();
    } catch (error) {
      console.error("Login error (component):", error);
      toast.error("Giriş başarısız. Lütfen tekrar deneyin.");
    } finally {
      setSubmitting(false);
    }
  };

  // === Register ===
  const registerSchema = Yup.object({
    name: Yup.string().required("*Gerekli"),
    surname: Yup.string().required("*Gerekli"),
    email: Yup.string().email("Geçersiz e-posta").required("*Gerekli"),
    password: Yup.string()
      .min(6, "En az 6 karakter olmalı")
      .required("*Gerekli"),
  });

  const handleRegister = async (values, { setSubmitting }) => {
    try {
      const response = await dispatch(registerUser(values)).unwrap();

      // response içinde kullanıcı ve token varsa kaydet
      if (response?.user && response?.token) {
        localStorage.setItem("user", JSON.stringify(response.user));
        localStorage.setItem("token", response.token);
      }

      toast.success("Kayıt başarılı! Giriş yapabilirsiniz.");
      setMode("login");
    } catch (error) {
      console.error("Register error:", error);
      toast.error("Kayıt başarısız. Lütfen tekrar deneyin.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={css.modal} onClick={handleOverlayClick}>
      <div className={css.modalContent}>
        {mode === "login" ? (
          <>
            <h2 className={css.title}>Giriş Yap</h2>
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={loginSchema}
              onSubmit={handleLogin}
            >
              {({ isSubmitting }) => (
                <Form className={css.form}>
                  <div className={css.field}>
                    <label htmlFor="email">E-mail</label>
                    <Field type="email" name="email" className={css.input} />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className={css.error}
                    />
                  </div>
                  <div className={css.field}>
                    <label htmlFor="password">Şifre</label>
                    <Field
                      type="password"
                      name="password"
                      className={css.input}
                    />
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
                      {isSubmitting ? "Hoşgeldiniz..." : "Giriş Yap"}
                    </button>
                    <button
                      type="button"
                      className={css.buttonRgs}
                      onClick={() => setMode("register")}
                    >
                      Kayıt Ol
                    </button>
                  </div>
                  <div>
                    <Link to="/sifremi-unuttum" className={css.buttonFgt} onClick={onClose}>
                      Şifremi Unuttum
                    </Link>
                  </div>
                </Form>
              )}
            </Formik>
          </>
        ) : (
          <>
            <h2 className={css.title}>Kayıt Ol</h2>
            <Formik
              initialValues={{ name: "", surname: "", email: "", password: "" }}
              validationSchema={registerSchema}
              onSubmit={handleRegister}
            >
              {({ isSubmitting }) => (
                <Form className={css.form}>
                  <div className={css.field}>
                    <label htmlFor="name">Ad</label>
                    <Field type="text" name="name" className={css.input} />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className={css.error}
                    />
                  </div>
                  <div className={css.field}>
                    <label htmlFor="surname">Soyad</label>
                    <Field type="text" name="surname" className={css.input} />
                    <ErrorMessage
                      name="surname"
                      component="div"
                      className={css.error}
                    />
                  </div>
                  <div className={css.field}>
                    <label htmlFor="email">E-mail</label>
                    <Field type="email" name="email" className={css.input} />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className={css.error}
                    />
                  </div>
                  <div className={css.field}>
                    <label htmlFor="password">Şifre</label>
                    <Field
                      type="password"
                      name="password"
                      className={css.input}
                    />
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
                      className={css.buttonRgs}
                    >
                      {isSubmitting ? "Kaydediliyor..." : "Kayıt Ol"}
                    </button>
                    <button
                      type="button"
                      className={css.buttonLgn}
                      onClick={() => setMode("login")}
                    >
                      Giriş Yap
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginModal;

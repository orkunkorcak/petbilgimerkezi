import css from "./LoginModal.module.css";
import { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { loginUser, registerUser } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";


const LoginModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const [mode, setMode] = useState("login"); // "login" veya "register"

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

  // === Login ===
  const loginSchema = Yup.object({
    email: Yup.string().email("Geçersiz e-posta").required("*Gerekli"),
    password: Yup.string()
      .min(6, "En az 6 karakter olmalı")
      .required("*Gerekli"),
  });

  const handleLogin = async (values, { setSubmitting }) => {
    try {
      await dispatch(loginUser(values));
      toast.success("Giriş başarılı!");
      console.log("login başarıyla tamamlandı");
      onClose();
    } catch (error) {
      console.error("Login error:", error);
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
      // doğrudan veritabanının istediği alanlarla gönderiyoruz
      await dispatch(registerUser(values));
      toast.success("Kayıt başarılı! Giriş yapabilirsiniz.");
      setMode("login"); // kayıt sonrası login formuna dön
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
                      {isSubmitting ? "Hoşgeldiniz..." : "Giriş yap"}
                    </button>
                    <button
                      type="button"
                      className={css.buttonRgs}
                      onClick={() => setMode("register")}
                    >
                      Kayıt Ol
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </>
        ) : (
          <>
            <h2 className={css.title}>Kayıt Ol</h2>
            <Formik
              initialValues={{
                name: "",
                surname: "",
                email: "",
                password: "",
              }}
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

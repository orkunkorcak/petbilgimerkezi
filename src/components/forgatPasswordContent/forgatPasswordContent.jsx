import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./forgatPasswordContent.module.css";
import { useState } from "react";

const ForgotPasswordContent = ({ setMode }) => {
    const [emailSent, setEmailSent] = useState(false);
    return (
      <div className={css.container}>
            {emailSent ? (
                <div className={css.message}>
                    Şifre sıfırlama bağlantısı e-posta adresinize gönderildi.
                </div>
            ) : (   
                <Formik
                initialValues={{ email: "" }}
                validationSchema={Yup.object({
                    email: Yup.string()
                        .email("Geçersiz e-posta adresi")
                        .required("*Gerekli"),
                })} 
                onSubmit={(values, { setSubmitting }) => {
                    // Simulate sending email
                        setTimeout(() => {
                            setEmailSent(true);
                            setSubmitting(false);
                        }, 1000);
                }}
            >
                        {({ isSubmitting }) => (
                            <Form className={css.form}>
                                <div className={css.field}>
                                    <label htmlFor="email">E-posta Adresi</label>
                                    <Field type="email" name="email" className={css.input} />
                                    <ErrorMessage
                                        name="email"
                                        component="div"
                                        className={css.error}
                                    />
                                </div>
                                <button type="submit" className={css.button} disabled={isSubmitting}>
                                    {isSubmitting ? "Gönderiliyor..." : "Şifre Sıfırlama Bağlantısı Gönder"}
                                </button>
                            </Form>
                        )}
            </Formik>
            )}
      </div>
    );
}

export default ForgotPasswordContent;

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./forgatPasswordContent.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendPasswordResetEmail } from "../../redux/auth/operations";
import {
  selectPasswordResetMessage,
  selectIsPasswordResetSending,
} from "../../redux/auth/selectors";
import toast from "react-hot-toast";

const ForgotPasswordContent = ({ setMode }) => {
  const dispatch = useDispatch();
  const [emailSent, setEmailSent] = useState(false);
  const isSending = useSelector(selectIsPasswordResetSending);
  const message = useSelector(selectPasswordResetMessage);

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const result = await dispatch(sendPasswordResetEmail(values.email));

      if (result.meta.requestStatus === "fulfilled") {
        setEmailSent(true);
        toast.success("E-posta başarıyla gönderildi!");
      } else {
        toast.error(result.payload || "E-posta gönderilemedi");
      }
    } catch (error) {
      toast.error("Bir hata oluştu");
    } finally {
      setSubmitting(false);
    }
  };


  return (
    <div className={css.container}>
      {emailSent ? (
        <div className={css.message}>
          Şifre sıfırlama bağlantısı e-posta adresinize gönderildi. Lütfen gelen
          kutunuzu kontrol edin.
        </div>
      ) : (
        <Formik
          initialValues={{ email: "" }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Geçersiz e-posta adresi")
              .required("*Gerekli"),
          })}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, values }) => (
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
              <button
                type="submit"
                className={css.button}
                disabled={isSubmitting || isSending}
              >
                {isSubmitting || isSending
                  ? "Gönderiliyor..."
                  : "Şifre Sıfırlama Bağlantısı Gönder"}
              </button>
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
};

export default ForgotPasswordContent;

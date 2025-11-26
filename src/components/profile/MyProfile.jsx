import { useSelector, useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./profiles.module.css";
// import { updateUser } from "../../redux/auth/operations";

const MyProfile = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const initialValues = {
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    password: "",
    gender: user?.gender || "none",
    birthDate: user?.birthDate || "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().min(2, "En az 2 karakter olmalıdır"),
    lastName: Yup.string().min(2, "En az 2 karakter olmalıdır"),
    password: Yup.string()
      .min(6, "Şifre en az 6 karakter olmalıdır")
      .nullable(),
    gender: Yup.string(),
    birthDate: Yup.date().nullable(),
  });

  const handleSave = (values) => {
    console.log("Kaydedilecek veriler:", values);
    // dispatch(updateUser(values));
  };

  return (
    <div className={css.formContainer}>
      <h2 className={css.title}>
        Değiştirmek istediğiniz bilgileri aşağıdan düzenleyebilirsiniz
      </h2>

      <Formik
        initialValues={initialValues}
        enableReinitialize={true}
        validationSchema={validationSchema}
        onSubmit={handleSave}
      >
        {() => (
          <Form>
            <label className={css.label}>İsim</label>
            <Field type="text" name="firstName" className={css.input} />
            <ErrorMessage
              name="firstName"
              component="div"
              className={css.error}
            />

            <label className={css.label}>Soyisim</label>
            <Field type="text" name="lastName" className={css.input} />
            <ErrorMessage
              name="lastName"
              component="div"
              className={css.error}
            />

            <label className={css.label}>Yeni Şifre</label>
            <Field
              type="password"
              name="password"
              placeholder="Boş bırakılırsa değişmez"
              className={css.input}
            />
            <ErrorMessage
              name="password"
              component="div"
              className={css.error}
            />

            <label className={css.label}>Cinsiyet</label>
            <div className={css.genderContainer}>
              <label>
                <Field type="radio" name="gender" value="male" />
                Erkek
              </label>

              <label>
                <Field type="radio" name="gender" value="female" />
                Kadın
              </label>

              <label>
                <Field type="radio" name="gender" value="none" />
                Belirtmek istemiyorum
              </label>
            </div>

            <label className={css.label}>Doğum Tarihi</label>
            <Field type="date" name="birthDate" className={css.input} />
            <ErrorMessage
              name="birthDate"
              component="div"
              className={css.error}
            />

            <button type="submit" className={css.saveBtn}>
              Güncelle
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MyProfile;

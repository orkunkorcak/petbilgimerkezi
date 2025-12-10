import { useSelector, useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-hot-toast";
import css from "./profiles.module.css";
import { updateUser } from "../../redux/auth/operations";

const MyProfile = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  if (!user?._id) return null;

  const initialValues = {
    name: user.name || "",
    surname: user.surname || "",
    password: "",
    gender: user.gender || "none",
    birthDate: user.birthDate ? user.birthDate.split("T")[0] : "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().min(2),
    surname: Yup.string().min(2),
    password: Yup.string().min(6).nullable(),
    gender: Yup.string(),
    birthDate: Yup.date().nullable(),
  });

  const handleSave = async (values) => {
    // map form values to backend field names (they already match here)
    const payload = {
      name: values.name,
      surname: values.surname,
      gender: values.gender,
      birthDate: values.birthDate || null,
    };

    if (values.password) payload.password = values.password;

    try {
      await dispatch(
        updateUser({
          id: user._id,
          data: payload,
        })
      ).unwrap();

      toast.success(
        "Profil güncellendi."
      );
    } catch (err) {
      toast.error(err || "Güncelleme sırasında hata oluştu");
    }
  };

  return (
    <div className={css.formContainer}>
      <h2 className={css.title}>Profil Bilgileri</h2>

      <Formik
        initialValues={initialValues}
        enableReinitialize
        validationSchema={validationSchema}
        onSubmit={handleSave}
      >
        <Form>
          <label className={css.label}>İsim</label>
          <Field name="name" className={css.input} />
          <ErrorMessage name="name" component="div" className={css.error} />

          <label className={css.label}>Soyisim</label>
          <Field name="surname" className={css.input} />
          <ErrorMessage name="surname" component="div" className={css.error} />

          <label className={css.label}>Yeni Şifre</label>
          <Field type="password" name="password" className={css.input} />
          <ErrorMessage name="password" component="div" className={css.error} />

          <label className={css.label}>Cinsiyet</label>
          <label>
            <Field type="radio" name="gender" value="male" /> Erkek
          </label>
          <label>
            <Field type="radio" name="gender" value="female" /> Kadın
          </label>
          <label>
            <Field type="radio" name="gender" value="none" /> Belirtmek
            istemiyorum
          </label>

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
      </Formik>
    </div>
  );
};

export default MyProfile;

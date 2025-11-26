import { Link, Outlet } from "react-router-dom";
import css from "./profiles.module.css";

const Profile = () => {
  return (
    <>
      <div
        className={css.linkContainer}
      >
        <Link to="myProfile" className={css.link}>
          Kişisel Bilgiler
        </Link>
        <Link to="petProfile" className={css.link}>
          Pet Bilgileri
        </Link>
      </div>
      <Outlet />
    </>
  );
};
export default Profile;
  
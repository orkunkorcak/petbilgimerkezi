import { Link, Outlet, useParams } from "react-router-dom";
import css from "./profiles.module.css";

const Profile = () => {
const { userId } = useParams();
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
  
import { Link } from "react-router-dom";
import  Navigation  from "../../components/navigation/Navigation";

const NotFoundPage = () => {
  return (
    <>
      <Navigation />
      <div className="not-found-page">
        <h1>404 - Page Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <Link to="/">
          <button>Go Back Home</button>
        </Link>
      </div>
    </>
  );
};
export default NotFoundPage;

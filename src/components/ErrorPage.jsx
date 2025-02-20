
import { Helmet } from 'react-helmet';
import errorimg from "../assets/error.jpg"
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className=" flex flex-col justify-center items-center min-h-screen">
      <Helmet>
        <title>ArtSync | page not found</title>
      </Helmet>
      <img className=" w-[40vw]" src={errorimg} alt="" />

      <Link to="/">
        <button className=" btn bg-gray-900 text-white">Go to Home</button>
      </Link>
    </div>
    );
};

export default ErrorPage;
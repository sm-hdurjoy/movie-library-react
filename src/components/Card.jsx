// Library Imports
import { Link } from "react-router-dom";

// Assets Imports
import NoImageAvailable from "../assets/images/notAvailable.jpg";

export const Card = ({ movie }) => {
  const { id, original_title, poster_path, release_date } = movie; // Destructuring properties from movie

  // Accessing image url from API and setting image if no image in API
  const moviePosterImage = poster_path
    ? `https://image.tmdb.org/t/p/original/${poster_path}`
    : NoImageAvailable; 

  return (
    <div className="max-w-[250px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3 hover:scale-105 transition-transform duration-300 ease-in-out">
      <Link to={`/movie/${id}`}>
        <img className="rounded-t-lg" src={moviePosterImage} alt="" />
      </Link>
      <div className="p-5">
        <Link to={`/movie/${id}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {original_title}
          </h5>
        </Link>
        {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {overview}
        </p> */}
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-100">
          Release Date : {release_date}
        </p>
      </div>
    </div>
  );
};

// Library Imports
import { useEffect } from "react";
import { Link } from "react-router-dom";

// Component Imports
import { Button } from "../components/Button";

// Asset imports
import PageNotFoundImage from "../assets/images/pagenotfound.png";

export const PageNotFound = () => {

  //updating tab title when a page is not found
  useEffect(() => {
    document.title = `Page Not Found / Movie Library`;
  }, []);

  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className="text-7xl text-gray-700 font-bold my-10 dark:text-white">
            Page Not Found!
          </p>
          <div className="max-w-lg">
            <img
              className="rounded"
              src={PageNotFoundImage}
              alt="404 Page Not Found"
            />
          </div>
        </div>
        <div className="flex justify-center my-4">
          <Link to="/">
            <Button>Back To Home</Button>
          </Link>
        </div>
      </section>
    </main>
  );
};

import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 flex flex-col items-center gap-4 md:flex md:items-center md:justify-around md:flex-row">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2030{" "}
          <Link to="/" className="hover:underline">
            Movie Library™{" "}
          </Link>
          , All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a
              href="https://twitter.com/h_durjoy_"
              target="_blank"
              className="mr-4 hover:underline md:mr-6 "
              rel="noreferrer"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/hazzaz-durjoy/"
              target="_blank"
              className="mr-4 hover:underline md:mr-6"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/sm-hdurjoy/"
              target="_blank"
              className="mr-4 hover:underline md:mr-6"
              rel="noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/durjoy.hazzaz"
              target="_blank"
              className="hover:underline"
              rel="noreferrer"
            >
              Facebook
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

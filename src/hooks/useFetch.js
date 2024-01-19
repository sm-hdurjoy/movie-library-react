// Library Imports
import { useEffect, useState } from "react";

export const useFetch = ({ apiPath }, queryTerm = "") => {
  const [data, setData] = useState([]); // State variable to hold the data fetched from the API call

  // Variable for dynamic API link
  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}&query=${queryTerm.queryTerm}`;

  // Fetching data by API call whenever a component/page is mounted
  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(url);
      const json = await response.json();
      setData(json.results);
    }

    fetchMovies();
  }, [url]);

  return { data };
};

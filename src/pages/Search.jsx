import { useSearchParams } from "react-router-dom";
import { Card } from "../components";
import { useFetch } from "../hooks/useFetch";
import { useDynamicTitle } from "../hooks/useDynamicTitle";

export const Search = (apiPath) => {
  const [searchParams] = useSearchParams(); // storing search value by useSearchParams
  const queryTerm = searchParams.get("q"); // getting query term

  const { data: movies } = useFetch(apiPath, { queryTerm }); // calling api based on the query term and storing in data: movies

  // Updating the tab name dynamically
  useDynamicTitle(`Search result for ${queryTerm}`);

  return (
    <main>
      <section className="py-6">
        <p className="text-3xl text-gray-700 dark:text-white">
          {movies.length === 0
            ? `No result found for '${queryTerm}'`
            : `Results for '${queryTerm}'`}
        </p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-center flex-wrap ">
          {movies &&
            movies.map((movie) => <Card key={movie.id} movie={movie} />)}
        </div>
      </section>
    </main>
  );
};

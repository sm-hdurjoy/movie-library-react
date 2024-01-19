// Component imports
import { Card } from "../components";
import { useFetch } from "../hooks/useFetch";
import { useDynamicTitle } from "../hooks/useDynamicTitle";

export const MovieList = (props) => {
  const apiPath = props; // apiPath from parent component sent as props
  const { title } = props; // title from parent component sent as props
  const { data: movies } = useFetch(apiPath);

  // Updating the tab name dynamically
  useDynamicTitle(title);

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-center flex-wrap other:justify-evenly">
          {movies &&
            movies.map((movie) => <Card key={movie.id} movie={movie} />)}
        </div>
      </section>
    </main>
  );
};

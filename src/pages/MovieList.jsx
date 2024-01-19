import { Card } from "../components";
import { useFetch } from "../hooks/useFetch";
import { useDynamicTitle } from "../hooks/useDynamicTitle";

export const MovieList = (props) => {
  const apiPath = props;
  const { title } = props;
  const { data: movies } = useFetch(apiPath);

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

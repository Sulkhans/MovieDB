import { useEffect, useState } from "react";
import { Slider } from "./Slider";
import { Trending } from "./Trending";
import { Section } from "./Section";

export const Home = ({ latestMovies, topMovies, topShows }) => {
  const [index, setIndex] = useState(0);

  return (
    <main className="text-white">
      <section
        className="h-screen bg-center bg-no-repeat bg-cover px-6"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgb(10, 10, 10, 0.3), transparent ), linear-gradient(to top, rgb(10, 10, 10) 30%, transparent), url('https://image.tmdb.org/t/p/original/${latestMovies[index].backdrop_path}`,
        }}
      >
        <Slider latestMovies={latestMovies} index={index} setIndex={setIndex} />
        <Trending />
      </section>
      <section className="bg-neutral-950 px-6">
        <Section data={topMovies} name="Top Rated Movies" />
        <Section data={topShows} name="Top Rated TV Shows" />
      </section>
    </main>
  );
};

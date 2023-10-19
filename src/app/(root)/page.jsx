import { fetchAllMovies } from "@/lib/actions/movie";
import Link from "next/link";

export default async function Page() {
  
  const movies = await fetchAllMovies();

  return (
    <>
      <div className="fixed top-0 left-0 filter blur-[2px] brightness-[0.15] w-full h-full flex justify-center items-center z-[-1]">
        <img src="/assets/bg-left.jpg" height={100} width={500} />
        <img src="/assets/bg-center.jpg" height={100} width={500} />
        <img src="/assets/bg-right.jpg" height={100} width={500} />
      </div>
      <div className="text-white">
        <div className="text-center text-2xl font-semibold py-8">
          Recently Added
        </div>
        <div className="min-[640px]:h-[100vh] w-full p-5">
          <div className="min-[640px]:grid grid-cols-5 grid-rows-auto p-2">
            {movies.map((movie) => {
              const year = movie.releaseDate.split("/")[2];

              return (
                <Link
                  key={movie.id}
                  href={`/movie/${movie.slug}`}
                  className="h-auto overflow-hidden w-[230px] shadow-sm"
                >
                  <div>
                    <img
                      src={movie.poster}
                      alt=""
                      className="h-80 rounded-md w-full duration-300 shadow-xl border-4 hover:border-blue-900 hover:cursor-pointer"
                    />
                    <div>
                      <p>{movie.title}</p>
                      <p className="text-gray-400 text-sm">{year}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

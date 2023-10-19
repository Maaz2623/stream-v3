import { getMovie, likeMovie } from "@/lib/actions/movie";
import Image from "next/image";

export default async function Page({ params }) {
  const movie = await getMovie(params.slug);


  return (
    <>
      <div className="fixed top-0 left-0 filter blur-[2px] brightness-[0.15] w-full h-full flex justify-center items-center z-[-1]">
        <img src="/assets/bg-left.jpg" height={100} width={500} />
        <img src="/assets/bg-center.jpg" height={100} width={500} />
        <img src="/assets/bg-right.jpg" height={100} width={500} />
      </div>
      <div className="text-white text-center text-2xl p-5 font-medium">
        <p>{movie.title}</p>
      </div>
      <div className="w-full h-[100vh] flex justify-center items-center py-6">
        <iframe
          className="rounded-md"
          height={550}
          width={1200}
          src={movie.embedUrl}
          loading="eager"
        ></iframe>
      </div>
      <div className="bg-black text-white p-10 mx-10 my-5 flex gap-10 rounded-lg">
        <div className="h-auto overflow-hidden w-[230px]">
          <img
            src={movie.poster}
            className="h-80 rounded-md w-full duration-300 shadow-xl"
          />
          {/* <div className="flex justify-between items-center p-2">
            <p
              className="flex justify-center items-center gap-1 cursor-pointer p-1"
            >
              <img height={20} width={20} src="/assets/like.png" />
              {movie.likes}
            </p>
            <p className="flex justify-center items-center gap-1 cursor-pointer p-1">
              <img height={20} width={20} src="/assets/dislike.png" />
              50
            </p>
          </div> */}
        </div>
        <div className="flex-1">
          <p className="text-2xl font-medium mb-2">{movie.title}</p>
          <div className="flex justify-start items-center gap-4 mt-4">
            <p className="border-2 border-white text-sm w-[fit-content] rounded-md cursor-pointer text-white p-2">
              {movie.quality === "1080p" ? "HD" : "-"}
            </p>
            <p className="text-yellow-500 cursor-pointer font-semibold border-yellow-500 rounded-md border-2 w-[fit-content] text-sm p-2">
              IMDB: {movie.rating}
            </p>
          </div>
          <div className="flex-col flex-wrap mt-5">
            <p className="text-md">{movie.plot}</p>
            <p className="mt-5">Genre : {movie.genre}</p>
            <p className="mt-5">Cast : {movie.cast}</p>
            <p className="mt-5">Released : {movie.releaseDate}</p>
            <p className="mt-5">Director : {movie.director}</p>
          </div>
        </div>
      </div>
    </>
  );
}

{
  /* <iframe
          className="h-[90%] w-[80%] rounded-md shadow-xl"
          src={movie.embedUrl}
          title="Abhishek Upmanyu - Jealous of Sabziwala (FULL SPECIAL)"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe> */
}

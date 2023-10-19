
export const revalidate = 0;

export const fetchAllMovies = async () => {
  try {
    const res = await fetch("https://stream-for-ruman.vercel.app/api/movies", {
      method: "GET",
      cache: "no-store",
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export const getMovie = async (slug) => {
  try {
    const res = await fetch(`https://stream-for-ruman.vercel.app/movies/${slug}`, {
      method: "GET",
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export const createMovie = async ({
  title,
  rating,
  slug,
  poster,
  quality,
  releaseDate,
  embedUrl,
  cast,
  genre,
  director,
  plot
}) => {
  try {
    const res = await fetch("https://stream-for-ruman.vercel.app/api/create", {
      method: 'POST',
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        title,
        rating,
        slug,
        poster,
        quality,
        releaseDate,
        embedUrl,
        cast,
        genre,
        director,
        plot
      }),
    });
    return res.json()
  } catch (error) {
    console.log(error)
  }
};


export const likeMovie = async (slug) => {
  try {
    const res = await fetch(`https://stream-for-ruman.vercel.app/api/like/${slug}`,{
      method: 'PUT'
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

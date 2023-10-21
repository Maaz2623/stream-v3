export const fetchAllMovies = async () => {
  try {
    const res = await fetch(`${process.env.URL}/api/movies`, {
      method: "GET",
      cache: 'no-store',
      headers: {
        "Content-type": "application/json",
      },
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export const getMovie = async (slug) => {
  try {
    const res = await fetch(`${process.env.URL}/api/movies/${slug}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
      cache: 'no-store',
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
    const res = await fetch(`${process.env.URL}/api/create`, {
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

export const revalidate = 0;
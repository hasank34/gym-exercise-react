export const exerciseOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "7e0aa816f9mshcb9d01b81d8d342p176f9ajsn440cad539041",
    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "7e0aa816f9mshcb9d01b81d8d342p176f9ajsn440cad539041",
    "x-rapidapi-host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};

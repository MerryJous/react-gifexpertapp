export const getGifs = async (category) => {
  const url = `http://api.giphy.com/v1/gifs/search?api_key=Epu0g2khD87DR4R5ZzxGMqI9D2fXzSYz&q=${encodeURI(
    category
  )}&limit=10`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });

  return gifs;
};

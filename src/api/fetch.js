// require('dotenv').config();
const URL = process.env.REACT_APP_BASE_URL;
const KEY = process.env.REACT_APP_API_KEY;

export async function getAllVideos(searchTitle, maxItems) {
  const response = await fetch(`${URL}&q=${searchTitle}&maxResults=${maxItems}&key=${KEY}`);
  const result = await response.json();
  return result;
}

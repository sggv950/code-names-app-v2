import axios from "axios";

const BASE_URL =
  process.env.NODE_ENV === "production" ? "/api" : "//localhost:5000/api";

export const createGame = async () => {
  const res = await axios.get(BASE_URL + "/creategame");
  const gameId = await res.data;
  return gameId;
}
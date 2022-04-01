import axios from "axios";

const KEY = "AIzaSyBXoIHmfYsV26BufaNxlH4ZrbpM-848oNo";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  },
  headers: {}
});

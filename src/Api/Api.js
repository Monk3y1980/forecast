import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
});

const apiKey = "73086d8cdcc1c284c6c173a777e9a180";

export const weatherApi = {
  byCityname(city) {
    return instance
      .get(`weather?q=${city}&units=metric&lang=ru&appid=${apiKey}`)
      .then((res) => res.data);
  },
};

import express from "express";
import axios from "axios";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(cors());

app.post("/", async (req, res) => {
  const { city } = req.body;
  if (city) {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=608dafea4bd25b94bf47a1a5f07f5a6b`;

    const response = await axios(URL);
    const { description } = response.data.weather[0];
    const { temp, humidity } = response.data.main;
    res.json({ description, temp, humidity });
  }
});

app.listen(3000, () => {
  console.log("weather app");
});

import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;

// For __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set view engine and custom views folder
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views2"));

app.get("/", (req, res) => {
  const day = new Date().getDay();
  const type = (day === 0 || day === 6) ? "the weekend" : "a weekday";
  const adv = (day === 0 || day === 6)
    ? "it's time to have some fun"
    : "it's time to work hard";

  res.render("index.ejs", { dayType: type, advice: adv });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});

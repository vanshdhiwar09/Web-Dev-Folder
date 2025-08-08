import express from 'express';
import path from "path";
import { fileURLToPath } from "url";
import bodyParser from 'body-parser';

const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); // or your actual path




app.get("/",(req,res)=>{
    res.render("index.ejs");
})

app.get("/blog", (req, res) => {
    res.render("blog"); // Looks for blog.ejs inside /views
});

app.post("/post-blog", (req, res) => {
  const { title, content } = req.body;
  console.log("Received:", title, content);
  res.redirect("/");
});



















app.listen(port,()=>{
    console.log(`server is running on port ${port}`);

})


import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
app.use(express.static("public"));

app.get("/", async (req,res) => {
    try {
       const response = await axios.get("https://v2.jokeapi.dev/joke/Any?lang=en");
       res.render("index.ejs", {joke: response.data});
    }
    catch (error) {
        res.status(500).send('An error occurred. Website cannot be displayed');
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
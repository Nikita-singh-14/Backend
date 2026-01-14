import express from "express";
import 'dotenv/config';
const app = express()

const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
    res.send("hellow world!");
})

app.get('/api/jokes', (req, res) => {
   const jokes = [
  {
    "id": "1",
    "title": "first joke",
    "description": "this is first joke"
  },
  {
    "id": "2",
    "title": "second joke",
    "description": "this is second joke"
  }
]

    res.send(jokes);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
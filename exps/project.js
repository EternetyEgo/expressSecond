const express = require("express")
const app = express()
app.use(express.json())

let movies = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
  { id: 3, name: "John White" },
];

// get method
app.get("/api/mov/:id", (req, res) => {
  const mov = movies.find((mov) => mov.id === parseInt(req.params.id));

  if (!mov)
    return res
      .status(404)
      .json({ status: false, massage: "We haven't this movie" });

  movies.name = req.body.name;
  res.send(mov);
});

// delete method 
app.delete("/api/mov/:id", (req, res) => {
  const mov = movies.find((mov) => mov.id === parseInt(req.params.id));
  if (!mov) return res.status(404).send("We haven't this movie");
  const movIndex = movies.indexOf(mov);
  movies.splice(movIndex, 1);
  res.send(mov);
});

// update 
app.put("/api/mov/:id", (req, res) => {
  const mov = movies.find((mov) => mov.id === parseInt(req.params.id));

  if (!mov)
    return res
      .status(404)
      .json({ status: false, massage: "We haven't this movie" });

  mov.name = req.body.name;
  res.send(mov);
});

// post 
app.post("/api/mov/add", (req, res) => {
  if (req.body.name <= 0) {
    return res.status(400).send("Please fully place");
  }
  const user = {
    id: movies.length + 1,
    name: req.body.name,
  };
  movies.push(mov);
  res.status(201).send(mov);
});


// running port 

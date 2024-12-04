const express = require("express");
const app = express();
const path = require("path");

const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Emily" },
  { id: 3, name: "Musk" },
];

app.delete("api/users/:id", (req, res) => {
  const user = users.find((user) => user.id === parseInt(req.params.id));

  if (!user) return res.status(404).send("We haven't this user");
  const userIndex = users.indexOf(user);
  users.splice(userIndex, 1);
  res.send(user);
});

app.get("api/users", (req, res) => {
  res.json({
    status: true,
    massage: `We have users: ${users.length} and their names ${users.name}`,
  });
});


// port 
const port = process.env.PORT || 2077;

app.listen(port, (req, res) => {
  console.log(`port say: ${port}`);
});

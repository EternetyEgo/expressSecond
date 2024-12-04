const express = require("express");
const app = express();
const path = require("path");

const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Emily" },
  { id: 3, name: "Musk" },
];

app.get("api/users", (req, res) => {
  res.send(users);
});

app.put("/api/user/:id", (req, res) => {
  const user = users.find((user) => user.id === parseInt(req.param.id));
  // validation
  if (req.body.name <= 0) {
    return res.send(400).send("Please fully place");
  }

  if (!user)
    return res
      .status(404)
      .json({ status: false, message: "Bunday ma'lumot bazada emas" });

  user.name = req.body.name;
  res.send(user);
});

// port
const port = process.env.PORT || 2077;

app.listen(port, () => {
  console.log(`port say: ${port}`);
});

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Nginx server acting as proxy server running on Docker");
});

const PORT = 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const express = require("express");
const app = express();

app.use(express.json({ limit: "5000mb" }));

app.post("/data", (req, res) => {
  const data = req.body;
  res.send({ message: "Received: ${data.message}" });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`REST server running on port ${PORT}`);
});

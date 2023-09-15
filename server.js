require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const helmet = require("helmet");
const cors = require("cors");

app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin: true, credentials: true }));

app.use("/api/v1", require("./Routes/tafsir"));

app.listen(port, () => {
  console.log("starting the server...");
});

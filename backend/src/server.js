const express = require("express");
const cors = require("cors");
const http = require("http");
const mongoose = require("mongoose");
const { setupWebSocket } = require("./websocket.js");

const routes = require("./routes");

const app = express();
const server = http.Server(app);

setupWebSocket(server);

mongoose.connect(
  "mongodb+srv://italo:italo@cluster0.gpcne.mongodb.net/omnistack10?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
);

app.use(cors());
app.use(express.json());
app.use(routes);
server.listen(3333);

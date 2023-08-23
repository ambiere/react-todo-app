import * as jsonServer from "json-server";
import cors = require("cors");
import * as path from "path";
import * as dotenv from "dotenv";

dotenv.config();

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();

server.use(cors());
server.use(jsonServer.bodyParser);
server.use(middlewares);
server.use(router);

server.listen(process.env.PORT, () => {
  console.log(
    `json-server is currently running on http://localhost:${process.env.PORT}`
  );
});

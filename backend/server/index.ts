import jsonServer from "json-server";
import cors from "cors";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "../database/db.json"));
const middlewares = jsonServer.defaults();

server.use(cors());
server.use(jsonServer.bodyParser);
server.use(middlewares);
server.use(router);

server.listen(process.env.PORT, () => {
  console.log(`json-server is running on http://localhost:${process.env.PORT}`);
});

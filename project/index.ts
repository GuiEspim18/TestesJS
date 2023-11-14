import { Server } from "..";
import { routes } from "./routes";

const server = new Server()
server.run(routes);
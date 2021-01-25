import * as bodyParser from "body-parser";
import { Container } from "inversify";
import "reflect-metadata";
import { InversifyExpressServer } from "inversify-express-utils";
// declare metadata by @controller annotation
import "./controllers/user.controller";
import { UserService } from "./services/user.service";
import { TYPES } from "./constants/types";

// set up container
const container = new Container();

// set up bindings
container.bind<UserService>(TYPES.UserService).to(UserService);

// create server
const server = new InversifyExpressServer(container);
server.setConfig(app => {
  // add body parser
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());
}).setErrorConfig(app => {
    app.use((err: any, req: any, res: any, next: any) => {
        console.error(err.stack);
        res.status(500).send("Something broke!");
    });
});;

const app = server.build();
app.listen(8000, () => {
  console.log("Server is running on port 8000.");
});

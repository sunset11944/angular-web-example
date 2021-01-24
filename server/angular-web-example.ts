import * as bodyParser from "body-parser";

import { Container } from "inversify";
import { interfaces, InversifyExpressServer, TYPE } from "inversify-express-utils";

// declare metadata by @controller annotation
// import "./controllers/foo_controller";

// set up container
const container = new Container();

// set up bindings
// container.bind<FooService>("FooService").to(FooService);

// create server
const server = new InversifyExpressServer(container);
server.setConfig((app) => {
  // add body parser
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());
}).setErrorConfig((app) => {
    app.use((err: any, req: any, res: any, next: any) => {
        console.error(err.stack);
        res.status(500).send("Something broke!");
    });
});;

const app = server.build();
app.listen(8000);
import { inject } from "inversify";
import { controller, httpGet } from "inversify-express-utils";
import { TYPES } from "../constants/types";
import { User } from "../models/user.model";
import { UserService } from "../services/user.service";

@controller("/users")
export class UserController {

  constructor(@inject(TYPES.UserService) private userService: UserService) {}

  @httpGet("/")
  public getUsers(): Promise<User[]> {
    return this.userService.getUsers();
  }
}

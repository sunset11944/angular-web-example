import { injectable } from "inversify";
import { User } from "../models/user.model";

@injectable()
export class UserService {
  constructor() {}

  public getUsers(): Promise<User[]> {
    return new Promise<User[]>(reserve => {
      reserve([
        { id: 1, name: "Superman"},
        { id: 2, name: "Batman"}
      ])
    })
  }
}

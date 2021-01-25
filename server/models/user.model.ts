import { injectable } from "inversify";

@injectable()
export class User {
  constructor(public id: number, public name: string) {}
}

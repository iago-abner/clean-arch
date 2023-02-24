import { User } from "../../domain/user.entity";
import { IUserRepository } from "../../domain/user.repository";

export class UserInMemory implements IUserRepository {
  items: User[] = []
  async insert(user: User): Promise<void> {
    this.items.push(user)
  }

  async findAll(): Promise<User[]> {
    return this.items
  }
}

import { User } from "../domain/user.entity"
import { IUserRepository } from "../domain/user.repository"

interface CreateUserOutput {
  id?: string,
  name: string,
  email: string
}

interface CreteUserInput {
  id?: string,
  name: string,
  email: string
}

export class CreateUserUseCase {

  constructor(private userRepo: IUserRepository) { }

  async execute(input: CreteUserInput): Promise<CreateUserOutput> {
    //operações nas entidades
    const createdUser = new User(input)
    await this.userRepo.insert(createdUser)
    return createdUser.user
  }
}

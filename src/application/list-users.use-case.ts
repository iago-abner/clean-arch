import { IUserRepository } from "../domain/user.repository"

interface CreateUserOutput {
  id?: string,
  name: string,
  email: string
}

export class ListUsersUseCase {

  constructor(private userRepo: IUserRepository) { }

  async execute(): Promise<CreateUserOutput[]> {
    const listAllUsers = await this.userRepo.findAll()
    return listAllUsers.map(u => u.user)
  }
}

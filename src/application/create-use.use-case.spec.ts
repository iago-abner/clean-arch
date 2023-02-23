import { UserInMemory } from "../infra/database/user-in-memory.repository";
import { CreateUserUseCase } from "./create-user.use-case";

describe('Create user', () => {
  test('Should create a new user', async () => {
    const repository = new UserInMemory()
    const createUseCase = new CreateUserUseCase(repository)
    const output = await createUseCase.execute({ name: 'eu', email: 'tu' })
    expect(output).toHaveProperty('id')
    expect(repository.items).toHaveLength(1)
  });
})

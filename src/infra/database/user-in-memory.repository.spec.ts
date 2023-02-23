import { User, UserProps } from "../../domain/user.entity";
import { UserInMemory } from "./user-in-memory.repository";

describe('User insert in memory', () => {
  it('Should save new user', async () => {
    const repository = new UserInMemory()
    const userProps: UserProps = { name: 'iago', email: 'iago@gmail.com' }
    const newUser = new User(userProps)
    await repository.insert(newUser)
    expect(repository.items).toHaveLength(1)
    expect(repository.items).toStrictEqual([newUser])
  });
})

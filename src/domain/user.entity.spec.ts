import { User, UserProps } from "./user.entity";

describe('User construct', () => {
  test('Should assign an ID if none is provided', () => {
    const userProps: UserProps = { name: 'iago', email: 'iago@gmail.com' }
    const newUser = new User(userProps)
    expect(newUser.user.id)
  });

  test('should update email user', () => {
    const newUser = new User({ name: 'John Doe', email: 'john.doe@example.com' });
    newUser.EmailUpdate('joão.fulano@exemplo.com')
    expect(newUser.user.email).toBe('joão.fulano@exemplo.com')
  });
})

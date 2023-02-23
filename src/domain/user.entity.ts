import { randomUUID } from "crypto"

export interface UserProps {
  id?: string
  name: string
  email: string
}

export class User {
  public user: UserProps
  constructor(user: Omit<UserProps, 'id'>) {
    this.user = {
      ...user,
      id: randomUUID()
    }
  }

  EmailUpdate(email: string) {
    this.user.email = email
    //Validação de caracteres
  }
}

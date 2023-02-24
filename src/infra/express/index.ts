import cors from 'cors'
import express, { Request, Response } from 'express'
import { CreateUserUseCase } from '../../application/create-user.use-case'
import { ListUsersUseCase } from '../../application/list-users.use-case'
import { UserInMemory } from '../database/user-in-memory.repository'

const app = express()
const repo = new UserInMemory()

app.use(cors())
app.use(express.json())

app.get('/', async (_, res) => {
  const listAllUsers = new ListUsersUseCase(repo)
  const result = await listAllUsers.execute()
  return res.status(200).send(result)
})

app.post('/', async (req: Request, res: Response) => {
  const createUserUseCase = new CreateUserUseCase(repo)
  const result = await createUserUseCase.execute(req.body)
  return res.status(201).json(result)
})

app.listen(3333, () => {
  console.log(`server is running in port 3333`)
})

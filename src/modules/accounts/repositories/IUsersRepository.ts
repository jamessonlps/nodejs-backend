import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import User from "../infra/typeorm/entities/User";

interface IUsersRepository {
  create(dataUser: ICreateUserDTO): Promise<void>;
  findByEmail(email: string): Promise<User>;
  findById(id: string): Promise<User>;
}

export default IUsersRepository;

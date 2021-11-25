import { inject, injectable } from "tsyringe";
import { hash } from 'bcrypt';
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import IUsersRepository from "../../repositories/IUsersRepository";
import { AppError } from "../../../../errors/AppError";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute(userData: ICreateUserDTO): Promise<void> {
    const userAlreadyExists = await this.usersRepository.findByEmail(userData.email);

    if (userAlreadyExists) {
      throw new AppError('User already exists!');
    }

    const passwordEncrypted = await hash(userData.password, 8);

    await this.usersRepository.create({
      name: userData.name,
      email: userData.email,
      password: passwordEncrypted
    });
  }
}

export default CreateUserUseCase;

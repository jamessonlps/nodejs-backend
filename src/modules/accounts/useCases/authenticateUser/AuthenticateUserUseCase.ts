import IUsersRepository from "../../repositories/IUsersRepository";
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
  };
  token: string;
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError('Email or password incorrect');
    }
    
    const passwordValidation = await compare(password, user.password);
    
    if (!passwordValidation) {
      throw new AppError('Email or password incorrect');
    }

    const token = sign({}, '537dae33808241dac71f8473c347a2d3', {
      subject: user.id,
      expiresIn: '1d'
    });

    const tokenResponse: IResponse = {
      token,
      user: {
        name: user.name,
        email: user.email
      }
    }

    return tokenResponse;
  }
}

export default AuthenticateUserUseCase;

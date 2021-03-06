import { NextFunction, Request, Response } from "express";
import { verify } from 'jsonwebtoken';
import UsersRepository from "../../../../modules/accounts/infra/typeorm/repositories/UsersRepository";
import { AppError } from "../../../errors/AppError";

interface IPayload {
  sub: string;
}

export async function userAuthentication(request: Request, response: Response, next: NextFunction) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('Token missing', 401);
  }

  const [, token] = authHeader.split(' ');

  try {
    const { sub: user_id } = verify(token, '537dae33808241dac71f8473c347a2d3') as IPayload;
    const usersRepository = new UsersRepository();
    const user = usersRepository.findById(user_id);

    if (!user) {
      throw new AppError('User does not exists', 401);
    }

    request.user = {
      id: user_id
    }

    next();
  }
  catch {
    throw new AppError('Invalid token', 401);
  }
}
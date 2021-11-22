import { Request, Response } from "express";
import CreatePropertyUseCase from "./CreatePropertyUseCase";
import { container } from 'tsyringe';

class CreatePropertyController {
  async handle(request: Request, response: Response): Promise<Response> {
    
    const { 
      title,
      description,
      monthly_rate,
      available,
      broker,
      state,
      city,
      district,
      street,
      number,
      complement 
    } = request.body;

    const createPropertyUseCase = container.resolve(CreatePropertyUseCase);

    await createPropertyUseCase.execute({
      title,
      description,
      monthly_rate,
      available,
      broker,
      state,
      city,
      district,
      street,
      number,
      complement
    });
    return response.status(201).send();
  }
}

export default CreatePropertyController;

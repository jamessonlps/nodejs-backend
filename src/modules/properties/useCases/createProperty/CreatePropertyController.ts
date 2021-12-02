import { Request, Response } from "express";
import CreatePropertyUseCase from "./CreatePropertyUseCase";
import { container } from 'tsyringe';

class CreatePropertyController {
  async handle(request: Request, response: Response): Promise<Response> {
    
    const data = request.body;

    const createPropertyUseCase = container.resolve(CreatePropertyUseCase);

    await createPropertyUseCase.execute(data);
    return response.status(201).send();
  }
}

export default CreatePropertyController;

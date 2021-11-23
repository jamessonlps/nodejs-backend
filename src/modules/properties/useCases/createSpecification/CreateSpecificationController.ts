import { Request, Response } from "express";
import { container } from "tsyringe";
import CreateSpecificationUseCase from "./CreateSpecificationUseCase";

class CreateSpecificationController {
  async handle(request: Request, response: Response): Promise<Response> {
    const specificationData = request.body;
    const specificationUseCase = container.resolve(CreateSpecificationUseCase);

    await specificationUseCase.execute(specificationData);

    return response.status(201).send();
  }
}

export default CreateSpecificationController;

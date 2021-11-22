import { Request, Response } from "express";
import { container } from "tsyringe";
import ListPropertiesUseCase from "./ListPropertiesUseCase";

class ListPropertiesController {
  async handle(request: Request, response: Response) {
    const listPropertiesUseCase = container.resolve(ListPropertiesUseCase);
    const allProperties = await listPropertiesUseCase.execute();

    return response.json(allProperties);
  }
}

export default ListPropertiesController;

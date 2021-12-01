import { Request, Response } from "express";
import { container } from "tsyringe";
import ListPropertiesUseCase from "./ListAvailablePropertiesUseCase";

class ListPropertiesController {
  async handle(request: Request, response: Response) {
    const { state, city, district } = request.query;

    const listPropertiesUseCase = container.resolve(ListPropertiesUseCase);
    
    const properties = await listPropertiesUseCase.execute({
      state: state as string,
      city: city as string,
      district: district as string
    });

    return response.json(properties);
  }
}

export default ListPropertiesController;

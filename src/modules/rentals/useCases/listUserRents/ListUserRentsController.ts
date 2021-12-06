import { Request, Response } from "express";
import { container } from "tsyringe";
import ListUserRentsUseCase from "./ListUserRentsUseCase";

class ListUserRentsController {

  async handle(request: Request, response: Response) {
    const { id } = request.user;

    const listUserRentsUseCase = container.resolve(ListUserRentsUseCase);

    const rentsList = await listUserRentsUseCase.execute(id);

    return response.json(rentsList);
  }
}

export default ListUserRentsController;

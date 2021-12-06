import { Request, Response } from "express";
import { container } from "tsyringe";
import CloseRentalUseCase from "./CloseRentalUseCase";

class CloseRentalController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id: user_id } = request.user;
    const { id } = request.params;

    const closeRentalUseCase = container.resolve(CloseRentalUseCase);

    const rental = await closeRentalUseCase.execute({ id, user_id });

    return response.status(200).json(rental);
  }
}

export default CloseRentalController;

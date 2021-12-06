import { inject, injectable } from "tsyringe";
import Rental from "../../infra/typeorm/entities/Rental";
import IRentalsRepository from "../../repositories/IRentalsRepository";

@injectable()
class ListUserRentsUseCase {

  constructor(
    @inject('RentalsRepository')
    private rentalsRepository: IRentalsRepository
  ) {}

  async execute(user_id: string): Promise<Rental[]> {
    const userRents = await this.rentalsRepository.findRentalByUser(user_id);
    return userRents;
  }
}

export default ListUserRentsUseCase;

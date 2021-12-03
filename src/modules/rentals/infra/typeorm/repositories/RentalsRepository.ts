import { getRepository, Repository } from "typeorm";
import ICreateRentalDTO from "../../../dtos/ICreateRentalDTO";
import IRentalsRepository from "../../../repositories/IRentalsRepository";
import Rental from "../entities/Rental";

class RentalsRepository implements IRentalsRepository {
  private repository: Repository<Rental>

  constructor() {
    this.repository = getRepository(Rental);
  }

  async create(data: ICreateRentalDTO): Promise<Rental> {
    const rental = this.repository.create(data);
    await this.repository.save(rental);
    return rental;
  }

  async findOpenRentalByUserID(user_id: string): Promise<Rental> {
    const rentalOpenByUser = await this.repository.findOne({ user_id });
    return rentalOpenByUser;
  }

  async findOpenRentalByPropertyID(property_id: string): Promise<Rental> {
    const rentalByProperty = await this.repository.findOne({ property_id });
    return rentalByProperty;
  }
}

export default RentalsRepository;

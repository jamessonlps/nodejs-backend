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
    const rentalOpenByUser = await this.repository.findOne({ 
      where: { user_id, final_date: null }
    });
    return rentalOpenByUser;
  }

  async findOpenRentalByPropertyID(property_id: string): Promise<Rental> {
    const rentalByProperty = await this.repository.findOne({ 
      where: { property_id, final_date: null }
    });
    return rentalByProperty;
  }

  async findRentalById(id: string): Promise<Rental> {
    const rental = await this.repository.findOne(id);
    return rental;
  }

  async findRentalByUser(user_id: string): Promise<Rental[]> {
    const userRentals = await this.repository.find({
      where: { user_id },
      relations: ['property']
    });
    return userRentals;
  }
}

export default RentalsRepository;

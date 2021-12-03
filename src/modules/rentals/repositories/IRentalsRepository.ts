import ICreateRentalDTO from "../dtos/ICreateRentalDTO";
import Rental from "../infra/typeorm/entities/Rental";

interface IRentalsRepository {
  create(data: ICreateRentalDTO): Promise<Rental>;
  findOpenRentalByUserID(user_id: string): Promise<Rental>;
  findOpenRentalByPropertyID(property_id: string): Promise<Rental>;
}

export default IRentalsRepository;

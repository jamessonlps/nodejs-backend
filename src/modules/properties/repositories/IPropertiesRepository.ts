import { ICreatePropertyDTO } from "../dtos/ICreatePropertyDTO";
import Property from "../infra/typeorm/entities/Property";

interface IPropertiesRepository {
  create(dataPropertie: ICreatePropertyDTO): Promise<void>;
  listAvailableProperties(state?: string, city?: string, district?: string): Promise<Property[]>;
  findById(id: string): Promise<Property>;
  updateStatusAvailable(id: string, available: boolean): Promise<void>;
}

export default IPropertiesRepository;

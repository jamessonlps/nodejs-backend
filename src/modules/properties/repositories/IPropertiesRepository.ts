import { ICreatePropertyDTO } from "../dtos/ICreatePropertyDTO";
import Property from "../infra/typeorm/entities/Property";

interface IPropertiesRepository {
  create(dataPropertie: ICreatePropertyDTO): Promise<void>;
  listAvailableProperties(state?: string, city?: string, district?: string): Promise<Property[]>;
}

export default IPropertiesRepository;

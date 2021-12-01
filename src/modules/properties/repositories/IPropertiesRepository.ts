import { ICreatePropertyDTO } from "../dtos/ICreatePropertyDTO";
import Property from "../infra/typeorm/entities/Property";

interface IPropertiesRepository {
  create({ title,
    description,
    monthly_rate,
    available,
    broker,
    state,
    city,
    district,
    street,
    number,
    complement 
  }: ICreatePropertyDTO): Promise<void>;

  listAvailableProperties(state?: string, city?: string, district?: string): Promise<Property[]>;
}

export default IPropertiesRepository;

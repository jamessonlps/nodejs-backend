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

  list(): Promise<Property[]>;

  // findByCity(city: string): Promise<Property[]>;

  // findByState(state: string): Promise<Property[]>;
}

export default IPropertiesRepository;

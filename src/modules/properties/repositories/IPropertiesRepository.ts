import Property from "../entities/Property";

export interface ICreatePropertyDTO {
  title: string;
  description: string;
  monthly_rate: number;
  available: boolean;
  broker: string;
  state: string;
  city: string;
  district: string;
  street: string;
  number: number;
  complement?: string; 
}

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

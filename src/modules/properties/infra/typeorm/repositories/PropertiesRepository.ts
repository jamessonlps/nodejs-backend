import { getRepository, Repository } from "typeorm";
import { ICreatePropertyDTO } from "../../../dtos/ICreatePropertyDTO";
import IPropertiesRepository from "../../../repositories/IPropertiesRepository";
import Property from "../entities/Property";

class PropertiesRepository implements IPropertiesRepository {
  private repository: Repository<Property>;

  constructor() {
    this.repository = getRepository(Property);
  }

  async create({ title,
    description,
    monthly_rate,
    available,
    broker,
    state,
    city,
    district,
    street,
    number,
    complement }: ICreatePropertyDTO): Promise<void> {
    const property = this.repository.create({
      title,
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
    });

    await this.repository.save(property);
  }

  async list(): Promise<Property[]> {
    const properties = await this.repository.find();
    return properties;
  }

}

export default PropertiesRepository;
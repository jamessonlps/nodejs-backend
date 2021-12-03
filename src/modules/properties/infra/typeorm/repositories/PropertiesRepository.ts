import { getRepository, Repository } from "typeorm";
import { ICreatePropertyDTO } from "../../../dtos/ICreatePropertyDTO";
import IPropertiesRepository from "../../../repositories/IPropertiesRepository";
import Property from "../entities/Property";

class PropertiesRepository implements IPropertiesRepository {
  private repository: Repository<Property>;

  constructor() {
    this.repository = getRepository(Property);
  }

  async create(data: ICreatePropertyDTO): Promise<void> {
    const property = this.repository.create(data);

    await this.repository.save(property);
  }

  async listAvailableProperties(state?: string, city?: string, district?: string): Promise<Property[]> {
    const propertiesQuery = await this.repository
      .createQueryBuilder('c')
      .where('available = :available', { available: true });

    if (state) {
      propertiesQuery.andWhere('c.state = :state', { state });
    }

    if (city) {
      propertiesQuery.andWhere('c.city = :city', { city });
    }

    if (district) {
      propertiesQuery.andWhere('c.district = :district', { district });
    }

    const properties = await propertiesQuery.getMany();
    return properties;
  }

}

export default PropertiesRepository;

import { inject, injectable } from "tsyringe";
import Property from "../../infra/typeorm/entities/Property";
import PropertiesRepository from "../../infra/typeorm/repositories/PropertiesRepository";

interface IRequest {
  state?: string;
  city?: string;
  district?: string;
}

@injectable()
class ListPropertiesUseCase {
  constructor(
    @inject('PropertiesRepository')
    private propertiesRepository: PropertiesRepository
  ) {}

  async execute({ state, city, district }: IRequest): Promise<Property[]> {
    const properties = await this.propertiesRepository.listAvailableProperties(state, city, district);
    return properties;
  }
}

export default ListPropertiesUseCase;

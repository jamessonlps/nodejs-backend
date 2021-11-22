import { inject, injectable } from "tsyringe";
import Property from "../../entities/Property";
import PropertiesRepository from "../../repositories/implementations/PropertiesRepository";

@injectable()
class ListPropertiesUseCase {
  constructor(
    @inject('PropertiesRepository')
    private propertiesRepository: PropertiesRepository
  ) {}

  async execute(): Promise<Property[]> {
    const properties = await this.propertiesRepository.list();
    return properties;
  }
}

export default ListPropertiesUseCase;

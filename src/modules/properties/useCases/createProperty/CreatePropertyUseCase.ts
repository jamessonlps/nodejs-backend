import { inject, injectable } from "tsyringe";
import IPropertiesRepository from "../../repositories/IPropertiesRepository";

interface IRequest {
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
  area: number;
  number_of_bathrooms: number;
  number_of_bedrooms: number;
  number_of_suites: number;
  isFurnished: boolean;
  aboutFurniture?: string;
  pets: boolean;
  garage: boolean;
}

@injectable()
class CreatePropertyUseCase {
  constructor(
    @inject('PropertiesRepository')
    private propertiesRepository: IPropertiesRepository
  ) {}

  async execute(data: IRequest): Promise<void> {
    await this.propertiesRepository.create(data);
  }
}

export default CreatePropertyUseCase;

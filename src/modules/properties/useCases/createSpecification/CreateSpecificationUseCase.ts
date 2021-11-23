import { inject, injectable } from "tsyringe";
import ISpecificationsRepository from "../../repositories/ISpecificationsRepository";

interface IRequest {
  area: number;
  number_of_bathrooms: number;
  number_of_bedrooms: number;
  number_of_suites: number;
  isFurnished: boolean;
  aboutFurniture: string;
  pets: boolean;
  garage: boolean;
}

@injectable()
class CreateSpecificationUseCase {
  constructor(
    @inject('SpecificationsRepository')
    private specificationsRepository: ISpecificationsRepository
  ) {}

  async execute(specificationData: IRequest) {
    await this.specificationsRepository.create(specificationData);
  }
}

export default CreateSpecificationUseCase;

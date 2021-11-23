export interface ICreateSpecificationDTO {
  area: number;
  number_of_bathrooms: number;
  number_of_bedrooms: number;
  number_of_suites: number;
  isFurnished: boolean;
  aboutFurniture?: string;
  pets: boolean;
  garage: boolean;
}

interface ISpecificationsRepository {
  create(specificationData: ICreateSpecificationDTO): Promise<void>;
}

export default ISpecificationsRepository;

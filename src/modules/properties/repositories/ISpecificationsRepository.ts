import { ICreateSpecificationDTO } from "../dtos/ICreateSpecificationDTO";

interface ISpecificationsRepository {
  create(specificationData: ICreateSpecificationDTO): Promise<void>;
}

export default ISpecificationsRepository;

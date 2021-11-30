import { getRepository, Repository } from "typeorm";
import { ICreateSpecificationDTO } from "../../../dtos/ICreateSpecificationDTO";
import Specification from "../entities/Specification";

class SpecificationsRepository {
  private repository: Repository<Specification>;

  constructor() {
    this.repository = getRepository(Specification);
  }

  async create(specificationData: ICreateSpecificationDTO) {
    const specification = this.repository.create(specificationData);
    await this.repository.save(specification);
  }
}

export default SpecificationsRepository;

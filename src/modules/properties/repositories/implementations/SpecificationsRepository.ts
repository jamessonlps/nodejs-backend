import { getRepository, Repository } from "typeorm";
import Specification from "../../entities/Specification";
import { ICreateSpecificationDTO } from "../ISpecificationsRepository";

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

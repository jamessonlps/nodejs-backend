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
}

@injectable()
class CreatePropertyUseCase {
  constructor(
    @inject('PropertiesRepository')
    private propertiesRepository: IPropertiesRepository
  ) {}

  async execute({ title,
    description,
    monthly_rate,
    available,
    broker,
    state,
    city,
    district,
    street,
    number,
    complement }: IRequest): Promise<void> {
    await this.propertiesRepository.create({ title,
      description,
      monthly_rate,
      available,
      broker,
      state,
      city,
      district,
      street,
      number,
      complement });
  }
}

export default CreatePropertyUseCase;

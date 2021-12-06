import { inject, injectable } from "tsyringe";
import IDateProvider from "../../../../shared/container/providers/DateProvider/IDateProvider";
import { AppError } from "../../../../shared/errors/AppError";
import IPropertiesRepository from "../../../properties/repositories/IPropertiesRepository";
import IRentalsRepository from "../../repositories/IRentalsRepository";

interface IRequest {
  id: string;
  user_id: string;
}

@injectable()
class CloseRentalUseCase {
  constructor(
    @inject('RentalsRepository')
    private rentalsRepository: IRentalsRepository,
    @inject('PropertiesRepository')
    private propertiesRepository: IPropertiesRepository,
    @inject('DayjsDateProvider')
    private dateProvider: IDateProvider
  ) {}
  
  async execute({ id, user_id }: IRequest) {
    const minDaily = 1;
    const rental = await this.rentalsRepository.findRentalById(id);
    const property = await this.propertiesRepository.findById(rental.property_id);

    const fine_amount = property.monthly_rate * 0.1;

    if (!rental) {
      throw new AppError('Rent does not exists');
    }

    const dateNow = this.dateProvider.dateNow();

    let daily = this.dateProvider.compareInDays(rental.initial_date, this.dateProvider.dateNow());

    if (daily <= 0) {
      daily = minDaily;
    }

    const delay = this.dateProvider.compareInDays(dateNow, rental.expected_return_date);

    let total = 0;
    if (delay > 0) {
      const fine = delay * fine_amount;
      total = fine;
    }

    total += daily * property.monthly_rate;

    rental.final_date = this.dateProvider.dateNow();
    rental.total = total;

    await this.rentalsRepository.create(rental);
    await this.propertiesRepository.updateStatusAvailable(property.id, true);

    return rental;
  }
}

export default CloseRentalUseCase;

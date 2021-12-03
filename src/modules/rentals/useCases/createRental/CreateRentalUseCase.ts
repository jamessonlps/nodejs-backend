import { inject, injectable } from "tsyringe";
import IDateProvider from "../../../../shared/container/providers/DateProvider/IDateProvider";
import { AppError } from "../../../../shared/errors/AppError";
import IRentalsRepository from "../../repositories/IRentalsRepository";

interface IRequest {
  user_id: string;
  property_id: string;
  expected_return_date: Date;
}

@injectable()
class CreateRentalUseCase {
  constructor(
    @inject('RentalsRepository')
    private rentalsRepository: IRentalsRepository,
    @inject('DayjsDateProvider')
    private dateProvider: IDateProvider
  ) {}

  async execute(dataRental: IRequest) {
    const minTimeRental = 24;
    const propertyIsUnavailable = await this.rentalsRepository.findOpenRentalByPropertyID(dataRental.property_id);

    if (propertyIsUnavailable) {
      throw new AppError('This property is unavailable!');
    }

    const userAlreadyHasRental = await this.rentalsRepository.findOpenRentalByUserID(dataRental.user_id);

    if (userAlreadyHasRental) {
      throw new AppError('There is already a rental in progress for this user!');
    }

    const dateNow = this.dateProvider.dateNow();
    const compare = this.dateProvider.compareInHours(dateNow, dataRental.expected_return_date);

    if (compare < minTimeRental) {
      throw new AppError('Invalid rental time!');
    }

    const rental = this.rentalsRepository.create(dataRental);

    return rental;
  }
}

export default CreateRentalUseCase;

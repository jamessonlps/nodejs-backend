import { container } from "tsyringe";

import './providers';

import UsersRepository from "../../modules/accounts/infra/typeorm/repositories/UsersRepository";
import IUsersRepository from "../../modules/accounts/repositories/IUsersRepository";
import PropertiesImagesRepository from "../../modules/properties/infra/typeorm/repositories/PropertiesImagesRepository";
import PropertiesRepository from "../../modules/properties/infra/typeorm/repositories/PropertiesRepository";
import IPropertiesImagesRepository from "../../modules/properties/repositories/IPropertiesImagesRepository";
import IPropertiesRepository from "../../modules/properties/repositories/IPropertiesRepository";
import RentalsRepository from "../../modules/rentals/infra/typeorm/repositories/RentalsRepository";
import IRentalsRepository from "../../modules/rentals/repositories/IRentalsRepository";

container.registerSingleton<IPropertiesRepository>(
  'PropertiesRepository',
  PropertiesRepository
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository
);

container.registerSingleton<IPropertiesImagesRepository>(
  'PropertiesImagesRepository',
  PropertiesImagesRepository
);

container.registerSingleton<IRentalsRepository>(
  'RentalsRepository',
  RentalsRepository
);

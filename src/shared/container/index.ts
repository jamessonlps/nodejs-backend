import { container } from "tsyringe";
import UsersRepository from "../../modules/accounts/infra/typeorm/repositories/UsersRepository";
import IUsersRepository from "../../modules/accounts/repositories/IUsersRepository";
import PropertiesRepository from "../../modules/properties/infra/typeorm/repositories/PropertiesRepository";
import SpecificationsRepository from "../../modules/properties/infra/typeorm/repositories/SpecificationsRepository";

import IPropertiesRepository from "../../modules/properties/repositories/IPropertiesRepository";
import ISpecificationsRepository from "../../modules/properties/repositories/ISpecificationsRepository";

container.registerSingleton<IPropertiesRepository>(
  'PropertiesRepository',
  PropertiesRepository
);

container.registerSingleton<ISpecificationsRepository>(
  'SpecificationsRepository',
  SpecificationsRepository
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository
);

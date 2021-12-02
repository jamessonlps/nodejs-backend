import { container } from "tsyringe";
import UsersRepository from "../../modules/accounts/infra/typeorm/repositories/UsersRepository";
import IUsersRepository from "../../modules/accounts/repositories/IUsersRepository";
import PropertiesRepository from "../../modules/properties/infra/typeorm/repositories/PropertiesRepository";
import IPropertiesRepository from "../../modules/properties/repositories/IPropertiesRepository";

container.registerSingleton<IPropertiesRepository>(
  'PropertiesRepository',
  PropertiesRepository
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository
);

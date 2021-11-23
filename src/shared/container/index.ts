import { container } from "tsyringe";

import PropertiesRepository from "../../modules/properties/repositories/implementations/PropertiesRepository";
import SpecificationsRepository from "../../modules/properties/repositories/implementations/SpecificationsRepository";
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

import { Router } from "express";

import CreatePropertyController from "../../../../modules/properties/useCases/createProperty/CreatePropertyController";
import ListPropertiesController from "../../../../modules/properties/useCases/listAvailableProperties/ListAvailablePropertiesController";

const propertiesRoutes = Router();

const createPropertyController = new CreatePropertyController();
const listPropertyController = new ListPropertiesController();

propertiesRoutes.post('/', createPropertyController.handle);
propertiesRoutes.get('/', listPropertyController.handle);

export default propertiesRoutes;

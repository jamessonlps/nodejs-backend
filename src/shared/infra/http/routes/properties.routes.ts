import { Router } from "express";
import multer from "multer";

import CreatePropertyController from "../../../../modules/properties/useCases/createProperty/CreatePropertyController";
import ListPropertiesController from "../../../../modules/properties/useCases/listAvailableProperties/ListAvailablePropertiesController";
import UploadPropertyImagesController from "../../../../modules/properties/useCases/uploadPropertyImages/UploadPropertyImagesController";
import uploadConfig from "../../../../utils/upload";
import { userAuthentication } from "../middlewares/userAuthentication";

const propertiesRoutes = Router();

const uploadPropertyImage = multer(uploadConfig);

const createPropertyController = new CreatePropertyController();
const listPropertyController = new ListPropertiesController();
const uploadPropertyImagesController = new UploadPropertyImagesController();

propertiesRoutes.post('/', createPropertyController.handle);
propertiesRoutes.get('/', listPropertyController.handle);
propertiesRoutes.post('/images/:id', userAuthentication, uploadPropertyImage.array('images'), uploadPropertyImagesController.handle);

export default propertiesRoutes;

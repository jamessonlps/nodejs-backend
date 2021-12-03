import { Router } from "express";
import CreateRentalController from "../../../../modules/rentals/useCases/createRental/CreateRentalController";
import { userAuthentication } from "../middlewares/userAuthentication";

const rentalRoutes = Router();

const createRentalController = new CreateRentalController();

rentalRoutes.post('/', userAuthentication, createRentalController.handle);

export default rentalRoutes;

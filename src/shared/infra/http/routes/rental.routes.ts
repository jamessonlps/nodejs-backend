import { Router } from "express";
import CloseRentalController from "../../../../modules/rentals/useCases/closeRental/CloseRentalController";
import CreateRentalController from "../../../../modules/rentals/useCases/createRental/CreateRentalController";
import ListUserRentsController from "../../../../modules/rentals/useCases/listUserRents/ListUserRentsController";
import { userAuthentication } from "../middlewares/userAuthentication";

const rentalRoutes = Router();

const createRentalController = new CreateRentalController();
const closeRentController = new CloseRentalController();
const listUserRentsController = new ListUserRentsController();

rentalRoutes.post('/', userAuthentication, createRentalController.handle);
rentalRoutes.post('/close/:id', userAuthentication, closeRentController.handle);
rentalRoutes.get('/user', userAuthentication, listUserRentsController.handle);

export default rentalRoutes;

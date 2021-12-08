import { Router } from "express";
import CreateUserController from "../../../../modules/accounts/useCases/createUser/CreateUserController";
import ProfileUserController from "../../../../modules/accounts/useCases/profileUserUseCase/ProfileUserController";
import { userAuthentication } from "../middlewares/userAuthentication";

const usersRoutes = Router();

const createuserController = new CreateUserController();
const profileUserController = new ProfileUserController();

usersRoutes.post('/', createuserController.handle);
usersRoutes.get('/profile', userAuthentication, profileUserController.handle);

export default usersRoutes;

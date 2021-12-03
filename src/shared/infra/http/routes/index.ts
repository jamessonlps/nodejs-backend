import { Router } from "express";
import authenticateRoutes from "./authenticate.routes";
import propertiesRoutes from "./properties.routes";
import rentalRoutes from "./rental.routes";
import usersRoutes from "./users.routes";

const router = Router();

router.use('/properties', propertiesRoutes);
router.use('/users', usersRoutes);
router.use('/rentals', rentalRoutes);
router.use(authenticateRoutes);

export { router };

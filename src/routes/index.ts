import { Router } from "express";
import authenticateRoutes from "./authenticate.routes";
import propertiesRoutes from "./properties.routes";
import specificationsRoutes from "./specifications.routes";
import usersRoutes from "./users.routes";

const router = Router();

router.use('/properties', propertiesRoutes);
router.use('/specifications', specificationsRoutes);
router.use('/users', usersRoutes);
router.use(authenticateRoutes);

export { router };

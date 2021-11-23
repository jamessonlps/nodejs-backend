import { Router } from "express";
import propertiesRoutes from "./properties.routes";
import specificationsRoutes from "./specifications.routes";

const router = Router();

router.use('/properties', propertiesRoutes);
router.use('/specifications', specificationsRoutes);

export { router };

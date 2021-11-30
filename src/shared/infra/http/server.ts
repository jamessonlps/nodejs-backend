import 'reflect-metadata';
import express from 'express';
import '../typeorm';
import '../../container';
import { router } from './routes';
import swaggerUi from 'swagger-ui-express';
import swaggerSetup from '../../../swagger.json';

const app = express();

app.use(express.json());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSetup));
app.use(router);

app.listen(3001, () => console.log('Server is running!'));

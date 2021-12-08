import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';
import 'dotenv/config';
import '../typeorm';
import '../../container';
import { router } from './routes';
import createConnection from '../typeorm';
import swaggerUi from 'swagger-ui-express';
import swaggerSetup from '../../../swagger.json';
import { AppError } from '../../errors/AppError';
import upload from '../../../utils/upload';

createConnection();
const app = express();

app.use(express.json());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSetup));
app.use('/properties', express.static(`${upload.tmpFolder}/properties`));
app.use(router);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      message: err.message
    });
  }
  
  return response.status(500).json({
    status: 'error',
    message: `Internal server error - ${err.message}`
  });
});

app.listen(3001, () => console.log('Server is running!'));

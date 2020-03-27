import * as express from 'express';

import { ErrorLogController } from '../controllers/errorLog.controller';

export const errorLogRoutes = express.Router();

errorLogRoutes.get('/', ErrorLogController.getErrorLogs);
errorLogRoutes.post('/', ErrorLogController.saveErrorLog);
import { HelloModel } from '../../models.ts/helloModel';

export interface ErrorHandlerProps extends HelloModel {
  message: string;
}

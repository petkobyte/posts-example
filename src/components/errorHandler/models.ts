import { HelloModel } from '../../models/helloModel';

export interface ErrorHandlerProps extends HelloModel {
  message: string;
}

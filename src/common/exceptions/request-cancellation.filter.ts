import { HttpException, HttpStatus } from '@nestjs/common';

export class RequestCancellationException extends HttpException {
  constructor() {
    super('Petición cancelada por el cliente', HttpStatus.REQUEST_TIMEOUT);
  }
}

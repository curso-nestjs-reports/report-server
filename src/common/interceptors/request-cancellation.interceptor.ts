import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { Request } from 'express';
import { RequestCancellationException } from '../exceptions/request-cancellation.filter';

@Injectable()
export class RequestCancellationInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req: Request = context.switchToHttp().getRequest();

    return new Observable((observer) => {
      const subscription = next.handle().subscribe({
        next: (value) => observer.next(value),
        error: (err) => observer.error(err),
        complete: () => observer.complete(),
      });

      req.on('close', () => {
        observer.error(new RequestCancellationException()); // Lanza la excepción personalizada
        subscription.unsubscribe(); // Libera recursos si es necesario
      });

      return () => subscription.unsubscribe(); // Cleanup
    });
  }
}

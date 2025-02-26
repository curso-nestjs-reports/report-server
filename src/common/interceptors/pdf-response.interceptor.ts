import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Response } from 'express';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

@Injectable()
export class PdfResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const ctx = context.switchToHttp();
    const res = ctx.getResponse<Response>();

    return next.handle().pipe(
      mergeMap(
        async (pdf: PDFKit.PDFDocument | Promise<PDFKit.PDFDocument>) => {
          // Configurar la respuesta HTTP para descargar el archivo
          res.setHeader('Content-Type', 'application/pdf');

          // Esperar el proceso de la data
          const pdfDoc = await pdf;
          pdfDoc.info.Title = 'hola_mundo';

          return new Promise<void>((resolve, reject) => {
            // Escribir el libro de Excel en la respuesta
            pdfDoc.pipe(res);
            pdfDoc.end();

            // Finalizar la respuesta
            pdfDoc.on('end', () => {
              // Cierra explícitamente la respuesta cuando el PDF finaliza
              res.end();
              resolve();
            });

            pdfDoc.on('error', (err) => {
              reject(err);
            });
          });
        },
      ),
    );
  }
}

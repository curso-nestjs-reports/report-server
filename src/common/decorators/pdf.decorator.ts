import { UseInterceptors } from '@nestjs/common';
import { PdfResponseInterceptor } from '../interceptors/pdf-response.interceptor';

export function PdfResponse() {
  return UseInterceptors(PdfResponseInterceptor);
}

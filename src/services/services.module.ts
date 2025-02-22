import { Module } from '@nestjs/common';
import { PdfPrinterService } from './pdf-printer.service';
import { PrismaService } from './prisma.service';

@Module({
  providers: [PdfPrinterService, PrismaService],
  exports: [PdfPrinterService, PrismaService],
})
export class ServicesModule {}

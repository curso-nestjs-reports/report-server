import { Module } from '@nestjs/common';

import { PrismaService } from '../../services/prisma.service';

import { BasicReportService } from './basic-report.service';
import { BasicReportController } from './basic-report.controller';

@Module({
  controllers: [BasicReportController],
  providers: [BasicReportService, PrismaService],
})
export class BasicReportModule {}

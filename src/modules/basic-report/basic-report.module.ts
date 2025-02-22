import { Module } from '@nestjs/common';

import { ServicesModule } from '../../services/services.module';

import { BasicReportService } from './basic-report.service';
import { BasicReportController } from './basic-report.controller';

@Module({
  controllers: [BasicReportController],
  providers: [BasicReportService],
  imports: [ServicesModule],
})
export class BasicReportModule {}

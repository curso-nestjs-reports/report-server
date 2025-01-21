import { Module } from '@nestjs/common';
import { BasicReportModule } from './modules/basic-report/basic-report.module';
import { HealthCheckModule } from './modules/health-check/health-check.module';

@Module({
  imports: [BasicReportModule, HealthCheckModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

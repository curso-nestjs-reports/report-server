import { Module } from '@nestjs/common';
import { BasicReportModule } from './modules/basic-report/basic-report.module';
import { HealthCheckModule } from './modules/health-check/health-check.module';
import { ServicesModule } from './services/services.module';

@Module({
  imports: [BasicReportModule, HealthCheckModule, ServicesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

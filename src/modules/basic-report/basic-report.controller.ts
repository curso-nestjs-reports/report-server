import { Controller, Get, Param } from '@nestjs/common';

import { BasicReportService } from './basic-report.service';
import { PdfResponse } from 'src/common/decorators';

@Controller('basic-report')
export class BasicReportController {
  constructor(private readonly basicReportService: BasicReportService) {}

  @Get()
  async findMany() {
    return await this.basicReportService.findMany();
  }

  @PdfResponse()
  @Get('hello')
  getHelloPdf() {
    return this.basicReportService.getHelloPdf();
  }

  @PdfResponse()
  @Get('employment-letter/:employeeId')
  getEmploymentLetterPdfByemployeeId(@Param('employeeId') employeeId: string) {
    return this.basicReportService.getEmploymentLetterPdfById(+employeeId);
  }
}

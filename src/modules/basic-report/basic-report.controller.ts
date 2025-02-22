import { Response } from 'express';
import { Controller, Get, Param, Res } from '@nestjs/common';

import { handleResponse } from 'src/helpers';

import { BasicReportService } from './basic-report.service';

@Controller('basic-report')
export class BasicReportController {
  constructor(private readonly basicReportService: BasicReportService) {}

  @Get()
  async findMany() {
    return await this.basicReportService.findMany();
  }

  @Get('hello')
  getHelloPdf(@Res() response: Response) {
    return handleResponse(response, this.basicReportService.getHelloPdf());
  }

  @Get('employment-letter/:employeeId')
  getEmploymentLetterPdfByemployeeId(
    @Res() response: Response,
    @Param('employeeId') employeeId: string,
  ) {
    return handleResponse(
      response,
      this.basicReportService.getEmploymentLetterPdfById(+employeeId),
    );
  }
}

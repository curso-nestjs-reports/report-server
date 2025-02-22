import { Injectable, NotFoundException } from '@nestjs/common';

import { employmentLetter, getHelloWorldReport } from 'src/reports';
import { PdfPrinterService } from 'src/services/pdf-printer.service';
import { PrismaService } from 'src/services/prisma.service';

@Injectable()
export class BasicReportService {
  constructor(
    private readonly prismaClient: PrismaService,
    private readonly printerService: PdfPrinterService,
  ) {}

  async findMany() {
    return this.prismaClient.employees.findMany();
  }

  getHelloPdf() {
    const docDefinition = getHelloWorldReport({ name: 'Rodrigo' });
    return this.printerService.createPdf(docDefinition);
  }

  async getEmploymentLetterPdfById(employeeId: number) {
    const employee = await this.prismaClient.employees.findFirst({
      where: { id: employeeId },
    });

    if (!employee) {
      throw new NotFoundException(`Employee with id '${employee} not found.'`);
    }

    const docDefinition = employmentLetter({
      employerName: 'Rodrigo Dorat',
      employerPosition: 'Gerente de RRHH',
      employeeName: employee.name,
      employeePosition: employee.position,
      employeeStartDate: employee.start_date,
      employeeHours: employee.hours_per_day,
      employeeWorkSchedule: employee.work_schedule,
      employerCompany: 'Tucan Code Corp.',
    });
    return this.printerService.createPdf(docDefinition);
  }
}

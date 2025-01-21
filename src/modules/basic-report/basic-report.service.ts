import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../services/prisma.service';

@Injectable()
export class BasicReportService {
  constructor(private readonly prismaClient: PrismaService) {}

  async findMany() {
    return this.prismaClient.employees.findMany();
  }
}

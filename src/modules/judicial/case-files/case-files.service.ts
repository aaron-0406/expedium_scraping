import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/modules/prisma/prisma.service';

@Injectable()
export class CaseFilesService {
  constructor(private prisma: PrismaService) {}
  async getAllCaseFiles(): Promise<any[]> {
    return await this.prisma["CASE_FILES"].fin;
  }
}

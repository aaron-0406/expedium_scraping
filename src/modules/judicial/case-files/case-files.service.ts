import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/modules/prisma/prisma.service';
import { caseFiles } from '@prisma/client'; // <- Tipo correcto generado por Prisma

@Injectable()
export class CaseFilesService {
  constructor(private prisma: PrismaService) {}

  async findAllCaseFiles(): Promise<caseFiles[]> {
    const caseFile = await this.prisma.caseFiles.findMany() as caseFiles[];
    return caseFile;
  }

  async findAllActiveCaseFiles(): Promise<caseFiles[]> {
    const activeCaseFiles = await this.prisma.caseFiles.findMany({
      where: {
        is_scrapper_active: true,
      },
    });

    return activeCaseFiles;
  }
}

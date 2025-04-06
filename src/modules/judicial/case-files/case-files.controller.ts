import { Controller, Get } from '@nestjs/common';
import { CaseFilesService } from './case-files.service';
import { caseFiles } from '@prisma/client';

@Controller()
export class CaseFilesController {
  constructor(private readonly caseFilesService: CaseFilesService) {}

  @Get('/case-files')
  getAllCaseFiles(): Promise<caseFiles[]> {
    return this.caseFilesService.findAllCaseFiles();
  }
  @Get('/case-files/active')
  getAllActiveCaseFiles(): Promise<caseFiles[]> {
    return this.caseFilesService.findAllActiveCaseFiles();
  }
}

import { Controller, Get } from '@nestjs/common';
import { CaseFilesService } from './case-files.service';

@Controller()
export class CaseFilesController {
  constructor(private readonly caseFilesService: CaseFilesService) {}

  @Get()
  getHello(): any[] {
    return this.caseFilesService.getAllCaseFiles();
  }
}

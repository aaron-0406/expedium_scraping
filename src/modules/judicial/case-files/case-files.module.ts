import { Module } from '@nestjs/common';
import { CaseFilesController } from './case-files.controller';
import { CaseFilesService } from './case-files.service';
import { PrismaModule } from 'src/modules/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [CaseFilesController],
  providers: [CaseFilesService],
})
export class AppModule {}

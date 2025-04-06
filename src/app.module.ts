import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CaseFilesController } from './modules/judicial/case-files/case-files.controller';
import { CaseFilesService } from './modules/judicial/case-files/case-files.service';
import { PrismaService } from './modules/prisma/prisma.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [() => ({})],
    }),
  ],
  controllers: [CaseFilesController, AppController],
  providers: [CaseFilesService, AppService, PrismaService],
})
export class AppModule {}

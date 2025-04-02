import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SuccessiveScrapingController } from './successive-scraping.controller';
import { SuccessiveScrapingService } from './successive-scraping.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [() => ({})],
    }),
  ],
  controllers: [SuccessiveScrapingController],
  providers: [SuccessiveScrapingService],
})
export class AppModule {}

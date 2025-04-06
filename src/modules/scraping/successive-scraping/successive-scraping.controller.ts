import { Controller, Get } from '@nestjs/common';
import { SuccessiveScrapingService } from './successive-scraping.service';

@Controller()
export class SuccessiveScrapingController {
  constructor(
    private readonly successiveScrapingService: SuccessiveScrapingService,
  ) {}

  @Get()
  getHello(): any {
    return this.successiveScrapingService.main();
  }
}

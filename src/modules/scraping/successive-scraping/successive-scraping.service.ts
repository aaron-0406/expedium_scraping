import { Injectable } from '@nestjs/common';
@Injectable()
export class SuccessiveScrapingService {
  main() {
    // let errorsCounter:number = 0;
    // await new Promise((resolve) => setTimeout(resolve, 0));
    // try {
    //   console.log('SuccessiveScrapingService main function started');
    //   const downloadPath = path.join(__dirname, '../../../../../public/docs');
    // } catch (error) {
    //   console.error('Error in main function:', error);
    // }
    return { notScanedCaseFiles: 0, errorsCounter: 0 };
  }
}

import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // Get represents getting something
  @Get()
  getHello(): string {
    // testing
    return this.appService.getHello();
  }
}

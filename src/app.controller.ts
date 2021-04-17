import { Controller, Get, Redirect } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // redirect
  @Get('example')
  @Redirect('https://example.com')
  toExample(): string {
    return 'redirect example.com';
  }
}

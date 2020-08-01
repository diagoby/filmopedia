import { Controller, Get } from '@nestjs/common';

import { Message } from '@api-interfaces';

import { AppService } from './app.service';
import { ConfigService } from '@config/config.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly config: ConfigService
  ) {}

  @Get('hello')
  getData(): Message {
    return this.appService.getData();
  }
}

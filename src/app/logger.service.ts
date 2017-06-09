import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
  logs: string[] = []; // capture logs for testing
  log(message: string) {
    this.logs.push(message);
    console.log(message);
  }
}

@Injectable()
export class BetterLoggerService extends LoggerService{
  log(message: string) {
    super.log(`Better log: ${message}`);
  }
}

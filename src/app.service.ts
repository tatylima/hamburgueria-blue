import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getappStatus(): string {
    return 'Server is running! 🚀\n Please check http://localhost:3333/api for Swagger docs...';
  }
}

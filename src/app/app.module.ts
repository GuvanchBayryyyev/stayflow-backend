import { Module } from '@nestjs/common';
import { AppController } from '../app/app.controller';
import { AppService } from '../app/app.service';
import { BookingController } from 'src/controllers/booking.controller';

@Module({
  imports: [],
  controllers: [AppController, BookingController],
  providers: [AppService],
})
export class AppModule { }

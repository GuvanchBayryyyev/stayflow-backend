import { Controller, Get } from '@nestjs/common';

@Controller('booking')
export class BookingController {
    @Get()
    findAll(): string {
        return 'This action returns all bookings';
    }
}
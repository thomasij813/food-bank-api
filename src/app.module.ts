import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HouseholdModule } from './household/household.module';

@Module({
  imports: [HouseholdModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

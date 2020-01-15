import { Module } from '@nestjs/common';
import { HouseholdModule } from './household/household.module';

@Module({
  imports: [HouseholdModule],
})
export class AppModule {}

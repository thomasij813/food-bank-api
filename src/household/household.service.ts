import { Injectable } from '@nestjs/common';
import Household from './household.interface';
import * as short from 'short-uuid';
import { CreateHouseholdDto } from './dto/create-household.dto';

@Injectable()
export class HouseholdService {
  private readonly households: Household[] = [];

  findAll(): Household[] {
    return this.households;
  }

  create(createHouseholdDTO: CreateHouseholdDto): Household {
    const {
      email,
      first,
      last,
      phone,
      street1,
      street2,
      city,
      state,
      zip,
    } = createHouseholdDTO;
    const id = short.generate();
    const household: Household = {
      id,
      email,
      first,
      last,
      phone,
      street1,
      street2,
      city,
      state,
      zip,
    };
    this.households.push(household);
    return household;
  }
}

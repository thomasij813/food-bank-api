import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import Household from './household.interface';
import * as short from 'short-uuid';
import { CreateHouseholdDto } from './dto/create-household.dto';

@Injectable()
export class HouseholdService {
  private households: Household[] = [];

  findAll(): Household[] {
    return this.households;
  }

  findOne(id: string): Household {
    const found = this.households.filter(household => household.id === id);

    if (found.length > 0) {
      return found[0];
    } else {
      throw new HttpException(`Household with id ${id} not found`, HttpStatus.NOT_FOUND);
    }
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

  delete(id: string): void {
    this.households = this.households.filter(household => household.id !== id);
  }
}

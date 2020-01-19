import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import Household from './household.interface';
import * as short from 'short-uuid';
import { CreateHouseholdDto } from './dto/createHousehold.dto';
import { UpdateHouseholdDto } from './dto/updateHousehold.dto';

@Injectable()
export class HouseholdService {
  private households: Household[] = [];

  find(dto?: UpdateHouseholdDto): Household[] {
    let found: Household[] = [...this.households];

    for(const key in dto) {
      let val = dto[key].toLowerCase();
      found = found.filter(household => household[key].toLowerCase().includes(val));
    }

    return found;
  }

  findOne(id: string): Household {
    const found = this.households.filter(household => household.id === id);

    if (found.length > 0) {
      return found[0];
    } else {
      throw new HttpException(`Household with id ${id} not found`, HttpStatus.NOT_FOUND);
    }
  }

  search(dto: UpdateHouseholdDto): Household[] {
    let found: Household[] = [...this.households];

    for(const key in dto) {
      let val = dto[key].toLowerCase();
      found = found.filter(household => household[key].toLowerCase().includes(val));
    }

    return found;
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

  update(id: string, updateHouseholdDto: UpdateHouseholdDto): void {
    const household = this.findOne(id);

    for (const key in updateHouseholdDto) {
      household[key] = updateHouseholdDto[key];
    }
  }

  delete(id: string): void {
    this.households = this.households.filter(household => household.id !== id);
  }
}

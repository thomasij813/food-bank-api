import {
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
  Body,
  Delete,
  Param,
  Patch,
  Query,
} from '@nestjs/common';
import { HouseholdService } from './household.service';
import Household from './household.interface';
import { CreateHouseholdDto } from './dto/createHousehold.dto';
import { UpdateHouseholdDto } from './dto/updateHousehold.dto';

@Controller('household')
export class HouseholdController {
  constructor(private readonly householdService: HouseholdService) {}

  @Get()
  @UsePipes(ValidationPipe)
  findAll(@Query() dto: UpdateHouseholdDto): Household[] {
    return this.householdService.find(dto);
  }

  @Get(':id')
  findOne(@Param('id') id): Household {
    return this.householdService.findOne(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() createHouseholdDto: CreateHouseholdDto): Household {
    return this.householdService.create(createHouseholdDto);
  }

  @Patch(':id')
  @UsePipes(ValidationPipe)
  udpate(@Param('id') id, @Body() updateHouseholdDto: UpdateHouseholdDto): void {
    return this.householdService.update(id, updateHouseholdDto);
  }

  @Delete(':id')
  delete(@Param('id') id): void {
    return this.householdService.delete(id);
  }
}

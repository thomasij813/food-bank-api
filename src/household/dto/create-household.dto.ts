import {
  IsEmail,
  ValidateNested,
  IsString,
  IsOptional,
  IsPhoneNumber,
  IsDefined,
} from 'class-validator';

export class CreateHouseholdDto {
  @IsEmail()
  readonly email: string;

  @IsString()
  readonly first: string;

  @IsString()
  readonly last: string;

  @IsPhoneNumber('US')
  @IsOptional()
  readonly phone?: string;

  @IsString()
  readonly street1: string;

  @IsString()
  @IsOptional()
  readonly street2?: string;

  @IsString()
  readonly city: string;

  @IsString()
  readonly state: string;

  @IsString()
  readonly zip: string;
}

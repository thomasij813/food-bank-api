import { IsEmail, ValidateNested, IsNotEmpty, IsString } from 'class-validator';

class Contact {
  @IsString()
  readonly first: string;

  @IsString()
  readonly last: string;

  @IsString()
  readonly phone: string;
}

class Address {
  @IsString()
  readonly street1: string;

  @IsString()
  readonly street2: string;

  @IsString()
  readonly city: string;

  @IsString()
  readonly state: string;

  @IsString()
  readonly zip: string;
}

export class CreateHouseholdDto {
  @IsEmail()
  readonly email: string;

  @ValidateNested()
  readonly contact: Contact;

  @ValidateNested()
  readonly address: Address;
}

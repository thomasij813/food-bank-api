import {
    IsEmail,
    IsString,
    IsOptional,
    IsPhoneNumber,
  } from 'class-validator';
  
  export class UpdateHouseholdDto {
    @IsEmail()
    @IsOptional()
    readonly email?: string;
  
    @IsString()
    @IsOptional()
    readonly first?: string;
  
    @IsString()
    @IsOptional()
    readonly last?: string;
  
    @IsPhoneNumber('US')
    @IsOptional()
    readonly phone?: string;
  
    @IsString()
    @IsOptional()
    readonly street1?: string;
  
    @IsString()
    @IsOptional()
    readonly street2?: string;
  
    @IsString()
    @IsOptional()
    readonly city?: string;
  
    @IsString()
    @IsOptional()
    readonly state?: string;
  
    @IsString()
    @IsOptional()
    readonly zip?: string;
  }
  
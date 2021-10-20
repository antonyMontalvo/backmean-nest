import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateEmployeeDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsNumber()
  @IsNotEmpty()
  readonly age: number;

  @IsString()
  readonly breed: string;
}

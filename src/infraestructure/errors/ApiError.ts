import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

export class ApiError {
  constructor(params: Partial<ApiError> = {} as ApiError) {
    Object.assign(this, params);
  }

  @ApiProperty({ description: 'Error mesage', example: 'Not found' })
  public message: string;

  @ApiProperty({ description: 'Type error', example: 'DB error' })
  public type: string;

  @ApiProperty({ description: 'Error code', example: HttpStatus.NOT_FOUND })
  public code: string;

  @ApiProperty({ description: 'Field involved', example: 'name' })
  public field: string;

  @ApiProperty({ description: 'Data information' })
  public data: string;
}

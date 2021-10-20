import { Injectable, Logger } from '@nestjs/common';
import { ApiError } from 'src/infraestructure/errors/ApiError';
import { CreateEmployeeDto } from '../../infrastructure/dto';

@Injectable()
export class EmployeeService {
  private readonly logger = new Logger(EmployeeService.name);

  async createEmployee(employee: CreateEmployeeDto) {
    try {
      this.logger.log(`Creating employee: ${JSON.stringify(employee)}`);
      return employee;
    } catch (ex) {
      throw new ApiError({
        message: ex.message,
        code: ex.code,
      });
    }
  }
}

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeeService } from './domain/services/employee.service';
import { EmployeeController } from './infrastructure/controller/employee.controller';
import EmployesSchema from './infrastructure/repository/employee.schema';

const services = [EmployeeService];
@Module({
  imports: [MongooseModule.forFeature([{ name: 'Employee', schema: EmployesSchema }])],
  controllers: [EmployeeController],
  providers: [...services],
})
export class EmployeeModule {}

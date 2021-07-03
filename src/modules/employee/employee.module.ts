import { MongooseModule } from '@nestjs/mongoose';
import { EmployeeController } from './infrastructure/employee.controller';
import { Module } from '@nestjs/common';
import EmployesSchema from './infrastructure/repository/employee.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Employee', schema: EmployesSchema }]),
    ],
    controllers: [EmployeeController]
})
export class EmployeeModule {}

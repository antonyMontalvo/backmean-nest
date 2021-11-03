import { Module } from '@nestjs/common';
import { EmployeeModule } from './employee/employee.module';
import { StoreModule } from './store/store.module';

@Module({
  imports: [EmployeeModule, StoreModule],
})
export class ModulesModule {}

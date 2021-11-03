import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { EmployeeService } from '../../domain/services/employee.service';
import { CreateEmployeeDto } from '../dto';

@ApiTags('Empleados')
@Controller('employees')
export class EmployeeController {
  constructor(private employeeService: EmployeeService) {}

  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: 'Crear nuevo empleado' })
  @ApiResponse({ status: 404, description: 'Error al crear' })
  @ApiResponse({ status: 201, description: 'Se guardaron los datos.' })
  @ApiBody({ type: CreateEmployeeDto })
  @Post()
  create(@Body() createEmployeeDto: CreateEmployeeDto): Promise<any> {
    return this.employeeService.createEmployee(createEmployeeDto);
  }

  @Get()
  findAll(@Query() query: any) {
    return `This action returns all cats (limit: ${query.limit} items)`;
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return `This action returns a #${id} cat`;
  // }

  // @Put(':id')
  // update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
  //   return `This action updates a #${id} cat`;
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return `This action removes a #${id} cat`;
  // }
}

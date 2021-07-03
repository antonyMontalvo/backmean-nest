import { ConfigService } from '@nestjs/config';
import {
  Controller,
  Get,
  Query,
  Post,
  Body,
  Put,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
  ApiTags,
  ApiResponse,
  ApiBody,
  ApiQuery,
  ApiOperation,
  ApiParam,
  ApiBearerAuth,
  ApiCreatedResponse,
} from '@nestjs/swagger';
import { CreateEmployeeDto } from './dto';

@ApiTags('Empleados')
@Controller('employees')
export class EmployeeController {
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ description: 'Crear nueva Área' })
  @ApiResponse({ status: 404, description: 'Error al crear' })
  @ApiResponse({ status: 201, description: 'Se guardaron los datos.' })
  @ApiBody({ type: [CreateEmployeeDto] })
  @Post()
  create(@Body() createEmployeeDto: CreateEmployeeDto) {
    return 'This action adds a new cat';
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

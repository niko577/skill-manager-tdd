import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { CreateEmployeeDto } from 'src/dto/create.dto';
import { EmployeesService } from './employees.service';

@ApiTags('Employees')
@Controller('employees')
export class EmployeesController {
    constructor(private readonly employeesService: EmployeesService) {}

    @ApiProperty()
    @Post('create')
    create(@Body() createEmployeeDto: CreateEmployeeDto) {
        return this.employeesService.create(createEmployeeDto);
    }

    @Get()
    findAll() {
        return '';
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return '';
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateEmployeeDto) {
        return '';
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return '';
    }
}

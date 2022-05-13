import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';

@Controller('employees')
export class EmployeesController {
    @Post()
    create(@Body() createEmployeeDto) {
        return '';
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

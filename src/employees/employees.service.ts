import { Injectable } from '@nestjs/common';
import { Employee } from '@prisma/client';
import { CreateEmployeeDto } from 'src/dto/create.dto';
import { PrismaService } from '../prisma.service';

@Injectable()
export class EmployeesService {
    constructor(private prisma: PrismaService) {}

    async create(createEmployeeDto: CreateEmployeeDto): Promise<string> {
        try {
            await this.prisma.employee.create({
                data: {
                    firstName: createEmployeeDto.firstName,
                    lastName: createEmployeeDto.lastName
                }
            });
            return await 'Employee created';
        } catch (e) {
            return 'Error while creating employee';
        }
    }

    async findAll(): Promise<Employee[]> {
        return await this.prisma.employee.findMany();
    }
}
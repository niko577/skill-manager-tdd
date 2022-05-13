import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class EmployeesService {
    constructor(private prisma: PrismaService) {}

    async create(createEmployeeDto) {
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
}
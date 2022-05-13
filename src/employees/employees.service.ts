import { Injectable } from '@nestjs/common';

@Injectable()
export class EmployeesService {
    create(createEmployeeDto) {
        return 'This action adds a new employee';
    }

    findAll() {
        return 'This action returns all employees';
    }

    findOne(id: number) {
        return `This action returns a #${id} employee`;
    }

    update(id: number, updateEmployeeDto) {
        return `This action updates a #${id} employee`;
    }

    remove(id: number) {
        return `This action removes a #${id} employee`;
    }
}

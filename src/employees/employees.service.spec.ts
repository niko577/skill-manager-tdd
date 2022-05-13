import { Test, TestingModule } from '@nestjs/testing';
import { EmployeesService } from './employees.service';

describe('EmployeesService', () => {
    let service: EmployeesService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [EmployeesService],
        }).compile();

        service = module.get<EmployeesService>(EmployeesService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it('can add new employee', () => {
        expect(service.create({
            firstName: 'John',
            lastName: 'Doe',
        })).toBe('Employee created');
    });
});
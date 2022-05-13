import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma.service';
import { EmployeesService } from './employees.service';
import { MockContext, Context, createMockContext } from '../context';

describe('EmployeesService', () => {
    let service: EmployeesService;

    let mockCtx: MockContext;
    let ctx: Context;

    beforeEach(async () => {
        mockCtx = createMockContext();
        ctx = mockCtx as unknown as Context;

        const module: TestingModule = await Test.createTestingModule({
            providers: [EmployeesService, PrismaService],
        }).compile();

        service = module.get<EmployeesService>(EmployeesService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it('should create new user', async () => {
        const employee = {
            id: 1,
            firstName: 'Janusz',
            lastName: 'Tracz'
        };
        mockCtx.prisma.employee.create.mockResolvedValue(employee);
      
        await expect(service.create(employee)).resolves.toEqual('Employee created');
    });

    it('error while add new employee', async () => {
        const employee: any = {
            id: 1,
            firstName: 'Janusz',
            lastName: 404
        };
        mockCtx.prisma.employee.create.mockResolvedValue(employee);
      
        await expect(service.create(employee)).resolves.toEqual('Error while creating employee');
    });
});
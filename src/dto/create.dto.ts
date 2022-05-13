import { ApiProperty } from '@nestjs/swagger';

export class CreateEmployeeDto {
    @ApiProperty()
    readonly firstName: string;
    
    @ApiProperty()
    readonly lastName: string;
}
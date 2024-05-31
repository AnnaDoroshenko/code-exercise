import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateFundDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    type: string;

    @IsString()
    @IsNotEmpty()
    status: string;
}

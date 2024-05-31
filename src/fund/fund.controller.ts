import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { CreateFundDto } from './dto/createFund.dto';
import { FundService } from './fund.service';
import { CreatedResponseDto } from 'src/common/dto/created-response.dto';
import { Fund } from './entities/fund.entity';

@Controller('funds')
export class FundController {
    constructor(private readonly fundService: FundService) {}

    @Post()
    async createFund(@Body() createFundDto: CreateFundDto): Promise<CreatedResponseDto> {
        return this.fundService.create(createFundDto);
    }

    @Get()
    async getFunds(): Promise<Fund[]> {
        return this.fundService.findAll();
    }

    @Get(':id')
    async getFund(@Param('id') id: number):Promise<Fund> {
        return this.fundService.findOne(id);
    }
} 

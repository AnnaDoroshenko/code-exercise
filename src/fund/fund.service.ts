import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFundDto } from './dto/createFund.dto';
import { Fund } from './entities/fund.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FUND_NOT_FOUND } from 'src/common/response-messages';

@Injectable()
export class FundService {
    constructor(
        @InjectRepository(Fund)
        private fundsRepository: Repository<Fund>,
    ) {}

    async create(createFundDto: CreateFundDto) {
        try {
            let newFund = new Fund({...createFundDto});
            newFund = await this.fundsRepository.save(newFund);
            return { id: newFund.id };
        } catch (error) {
            throw new Error('Failed to create fund');
        }
    }

    findAll(): Promise<Fund[]> {
        try {
            return this.fundsRepository.find();
        } catch (error) {
            throw new Error('Failed to find funds');
        }
    }

    async findOne(id: number): Promise<Fund> {
        const fund = await this.fundsRepository.findOne({ where: { id } });
        if (!fund) {
            throw new NotFoundException(FUND_NOT_FOUND);
        }
        return fund;
    }

    update(id: number, updateFundDto: any) {
        return `This action updates a #${id} fund`;
    }

    remove(id: number) {
        return `This action removes a #${id} fund`;
    }
}

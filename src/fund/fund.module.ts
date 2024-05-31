import { Module } from '@nestjs/common';
import { FundController } from './fund.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fund } from './entities/fund.entity';
import { FundService } from './fund.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Fund]),
  ],
  controllers: [FundController],
  providers: [FundService]
})
export class FundModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LegalEntityModule } from './legal_entity/legal_entity.module';
import { FundModule } from './fund/fund.module';
import { CommitmentModule } from './commitment/commitment.module';
import { dataSourceOptions } from 'database/data-source';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(dataSourceOptions),
    LegalEntityModule,
    FundModule,
    CommitmentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

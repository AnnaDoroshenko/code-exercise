import { Module } from '@nestjs/common';
import { LegalEntityService } from './legal_entity.service';
import { LegalEntityController } from './legal_entity.controller';

@Module({
  controllers: [LegalEntityController],
  providers: [LegalEntityService],
})
export class LegalEntityModule {}

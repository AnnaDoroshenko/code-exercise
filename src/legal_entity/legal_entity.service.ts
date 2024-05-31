import { Injectable } from '@nestjs/common';
import { CreateLegalEntityDto } from './dto/create-legal_entity.dto';
import { UpdateLegalEntityDto } from './dto/update-legal_entity.dto';

@Injectable()
export class LegalEntityService {
  create(createLegalEntityDto: CreateLegalEntityDto) {
    return 'This action adds a new legalEntity';
  }

  findAll() {
    return `This action returns all legalEntity`;
  }

  findOne(id: number) {
    return `This action returns a #${id} legalEntity`;
  }

  update(id: number, updateLegalEntityDto: UpdateLegalEntityDto) {
    return `This action updates a #${id} legalEntity`;
  }

  remove(id: number) {
    return `This action removes a #${id} legalEntity`;
  }
}

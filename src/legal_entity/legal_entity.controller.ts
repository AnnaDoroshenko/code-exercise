import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LegalEntityService } from './legal_entity.service';
import { CreateLegalEntityDto } from './dto/create-legal_entity.dto';
import { UpdateLegalEntityDto } from './dto/update-legal_entity.dto';

@Controller('legal-entity')
export class LegalEntityController {
  constructor(private readonly legalEntityService: LegalEntityService) {}

  @Post()
  create(@Body() createLegalEntityDto: CreateLegalEntityDto) {
    return this.legalEntityService.create(createLegalEntityDto);
  }

  @Get()
  findAll() {
    return this.legalEntityService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.legalEntityService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLegalEntityDto: UpdateLegalEntityDto) {
    return this.legalEntityService.update(+id, updateLegalEntityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.legalEntityService.remove(+id);
  }
}

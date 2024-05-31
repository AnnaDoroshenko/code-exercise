import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CommitmentService } from './commitment.service';
import { CreateCommitmentDto } from './dto/create-commitment.dto';
import { UpdateCommitmentDto } from './dto/update-commitment.dto';

@Controller('commitment')
export class CommitmentController {
  constructor(private readonly commitmentService: CommitmentService) {}

  @Post()
  create(@Body() createCommitmentDto: CreateCommitmentDto) {
    return this.commitmentService.create(createCommitmentDto);
  }

  @Get()
  findAll() {
    return this.commitmentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.commitmentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCommitmentDto: UpdateCommitmentDto) {
    return this.commitmentService.update(+id, updateCommitmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.commitmentService.remove(+id);
  }
}

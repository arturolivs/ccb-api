import { CreateChurchUseCase } from '@/application/usecases/church/create-church.usecase'
import { Body, Controller, Post } from '@nestjs/common'
import { CreateChurchDto } from '../dto/create-church.dto'
import { Church } from '@/domain/models/church.entity'

@Controller('churches')
export class ChurchesController {
  constructor(private createChurchUseCase: CreateChurchUseCase) {}

  @Post()
  async create(@Body() createChurchDto: CreateChurchDto) {
    const output = await this.createChurchUseCase.execute(createChurchDto)
    return new Church(output).toJSON()
  }
}

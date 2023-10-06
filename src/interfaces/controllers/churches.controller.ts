import { CreateChurchUseCase } from '@/application/use-cases/church/create-church.use-case'
import { ListChurchesUseCase } from '@/application/use-cases/church/list-churches.use-case'
import { Body, Controller, Get, Post } from '@nestjs/common'
import { CreateChurchDto } from '../dto/create-church.dto'
import { Church } from '@/domain/models/church.entity'

@Controller('churches')
export class ChurchesController {
  constructor(
    private createChurchUseCase: CreateChurchUseCase,
    private listChurchesUseCase: ListChurchesUseCase,
  ) {}

  @Post()
  async create(@Body() createChurchDto: CreateChurchDto) {
    const output = await this.createChurchUseCase.execute(createChurchDto)
    return new Church(output).toJSON()
  }

  @Get()
  async search() {
    const output = await this.listChurchesUseCase.execute()
    return output
  }
}

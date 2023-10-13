import { CreateChurchUseCase } from '@/application/use-cases/church/create-church.use-case'
import { ListChurchesUseCase } from '@/application/use-cases/church/list-churches.use-case'
import { GetChurchUseCase } from '@/application/use-cases/church/get-church.use-case'
import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { CreateChurchDto } from '../dto/create-church.dto'

@Controller('churches')
export class ChurchesController {
  constructor(
    private createChurchUseCase: CreateChurchUseCase,
    private listChurchesUseCase: ListChurchesUseCase,
    private getChurchUseCase: GetChurchUseCase,
  ) {}

  @Post()
  async create(@Body() createChurchDto: CreateChurchDto) {
    const output = await this.createChurchUseCase.execute(createChurchDto)
    return output.toJSON()
  }

  @Get()
  async search() {
    return await this.listChurchesUseCase.execute()
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.getChurchUseCase.execute(id)
  }
}

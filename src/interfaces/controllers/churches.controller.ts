import { CreateChurchUseCase } from '@/application/use-cases/church/create-church.use-case'
import { ListChurchesUseCase } from '@/application/use-cases/church/list-churches.use-case'
import { GetChurchUseCase } from '@/application/use-cases/church/get-church.use-case'
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { CreateChurchDto } from '../dto/create-church.dto'
import { DeleteChurchUseCase } from '@/application/use-cases/church/delete-church.use-case'
import { UpdateChurchUseCase } from '@/application/use-cases/church/update-church.use-case'
import { UpdateChurchDto } from '../dto/update-church.dto'

@Controller('churches')
export class ChurchesController {
  constructor(
    private listChurchesUseCase: ListChurchesUseCase,
    private getChurchUseCase: GetChurchUseCase,
    private createChurchUseCase: CreateChurchUseCase,
    private deleteChurchUseCase: DeleteChurchUseCase,
    private updateChurchUseCase: UpdateChurchUseCase,
  ) {}

  @Get()
  async search() {
    return await this.listChurchesUseCase.execute()
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const church = await this.getChurchUseCase.execute(id)
    return church.formatted()
  }

  @Post()
  async create(@Body() createChurchDto: CreateChurchDto) {
    const output = await this.createChurchUseCase.execute(createChurchDto)
    return output.formatted()
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    await this.deleteChurchUseCase.execute(id)
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateChurchDto: UpdateChurchDto,
  ) {
    const output = await this.updateChurchUseCase.execute({
      id,
      ...updateChurchDto,
    })
    return output.formatted()
  }
}

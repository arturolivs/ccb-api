import { ChurchEntity } from '@/domain/models/church.entity'
import { ChurchRepository } from '@/domain/repositories/church.repository'
import { PrismaService } from '../prisma.service'
import { ChurchModelMapper } from '../mappers/church-model.mapper'
import { NotFoundError } from '@/domain/errors/not-found-error'

export class ChurchPrismaRepository implements ChurchRepository {
  constructor(private prismaService: PrismaService) {}

  async create(data: ChurchEntity): Promise<ChurchEntity> {
    const result = await this.prismaService.church.create({
      data: data.toJSON(),
    })

    return ChurchModelMapper.toEntity(result)
  }

  async findAll(): Promise<any> {
    return await this.prismaService.church.findMany()
  }

  async byId(id: string): Promise<ChurchEntity> {
    return await this._get(id)
  }

  async update(entity: ChurchEntity): Promise<void> {
    await this._get(entity.id)
    await this.prismaService.church.update({
      data: entity.toJSON(),
      where: {
        id: entity.id,
      },
    })
  }

  async delete(id: string): Promise<void> {
    await this._get(id)
    await this.prismaService.church.delete({
      where: { id },
    })
  }

  protected async _get(id: string): Promise<ChurchEntity> {
    try {
      const church = await this.prismaService.church.findUnique({
        where: { id },
      })

      return ChurchModelMapper.toEntity(church)
    } catch {
      throw new NotFoundError(`Church model not found for id ${id}`)
    }
  }
}

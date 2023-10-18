import { ChurchEntity } from '@/domain/models/church.entity'
import { ChurchRepository } from '@/domain/repositories/church.repository'
import { PrismaService } from '../prisma.service'
import { ChurchModelMapper } from '../mappers/church-model.mapper'

export class ChurchPrismaRepository implements ChurchRepository {
  constructor(private prismaService: PrismaService) {}

  async findAll(): Promise<any> {
    return await this.prismaService.church.findMany()
  }

  async findByAddressCode(cd_address: string): Promise<ChurchEntity> {
    const church = await this.prismaService.church.findUnique({
      where: { cd_address },
    })

    return church && ChurchModelMapper.toEntity(church)
  }

  async byId(id: string): Promise<ChurchEntity> {
    const church = await this.prismaService.church.findUnique({
      where: { id },
    })

    return church && ChurchModelMapper.toEntity(church)
  }

  async create(data: ChurchEntity): Promise<ChurchEntity> {
    const church = await this.prismaService.church.create({
      data: data.formatted(),
    })

    return ChurchModelMapper.toEntity(church)
  }

  async update(entity: ChurchEntity): Promise<ChurchEntity> {
    const church = await this.prismaService.church.update({
      data: entity.formatted(),
      where: {
        id: entity.id,
      },
    })

    return ChurchModelMapper.toEntity(church)
  }

  async delete(id: string): Promise<void> {
    await this.prismaService.church.delete({
      where: { id },
    })
  }
}

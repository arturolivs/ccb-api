import { ChurchEntity } from '@/domain/models/church.entity'
import { Church as PrismaChurch } from '@prisma/client'

export class ChurchModelMapper {
  static toEntity({ id, cd_address, locale, createdAt }: PrismaChurch) {
    const data = {
      cd_address,
      locale,
      createdAt,
    }

    return new ChurchEntity(data, id)
  }
}

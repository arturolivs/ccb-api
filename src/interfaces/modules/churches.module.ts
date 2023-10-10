import { Module } from '@nestjs/common'

import { ChurchesController } from '../controllers/churches.controller'
import { PrismaService } from '@/infra/database/prisma/prisma.service'
import { ChurchPrismaRepository } from '@/infra/database/prisma/repositories/church-prisma.repository'
import { CreateChurchUseCase } from '@/application/use-cases/church/create-church.use-case'
import { ListChurchesUseCase } from '@/application/use-cases/church/list-churches.use-case'
import { ChurchRepository } from '@/domain/repositories/church.repository'
import { GetChurchUseCase } from '@/application/use-cases/church/get-church.use-case'

@Module({
  controllers: [ChurchesController],
  providers: [
    {
      provide: 'PrismaService',
      useClass: PrismaService,
    },
    {
      provide: 'ChurchRepository',
      useFactory: (prismaService: PrismaService) => {
        return new ChurchPrismaRepository(prismaService)
      },
      inject: ['PrismaService'],
    },
    {
      provide: CreateChurchUseCase,
      useFactory: (churchRepository: ChurchRepository) => {
        return new CreateChurchUseCase(churchRepository)
      },
      inject: ['ChurchRepository'],
    },
    {
      provide: ListChurchesUseCase,
      useFactory: (churchRepository: ChurchRepository) => {
        return new ListChurchesUseCase(churchRepository)
      },
      inject: ['ChurchRepository'],
    },
    {
      provide: GetChurchUseCase,
      useFactory: (churchRepository: ChurchRepository) => {
        return new GetChurchUseCase(churchRepository)
      },
      inject: ['ChurchRepository'],
    },
  ],
})
export class ChurchesModule {}

import { Module } from '@nestjs/common'
import { PrismaService } from './prisma/prisma.service'
import { ConfigModule, ConfigService } from '@nestjs/config'

@Module({
  imports: [ConfigModule.forRoot()],
  providers: [ConfigService, PrismaService],
  exports: [PrismaService],
})
export class DatabaseModule {}

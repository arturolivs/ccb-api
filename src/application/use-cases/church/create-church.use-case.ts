import { ChurchRepository } from '@/domain/repositories/church.repository'
import { UseCase } from '../use-case.interface'
import {
  ChurchEntity,
  TChurch,
  TChurchBase,
} from '@/domain/models/church.entity'

export type CreateChurchInput = TChurchBase

export type CreateChurchOutput = TChurch

export class CreateChurchUseCase
  implements UseCase<CreateChurchInput, CreateChurchOutput>
{
  constructor(private churchRepository: ChurchRepository) {}

  async execute(input: CreateChurchInput): Promise<CreateChurchOutput> {
    const church = new ChurchEntity(input).toJSON()
    return await this.churchRepository.create(church)
  }
}

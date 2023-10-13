import { ChurchRepository } from '@/domain/repositories/church.repository'
import { UseCase } from '../use-case.interface'
import { ChurchEntity } from '@/domain/models/church.entity'

export type ListChurchesInput = void

export type ListChurchesOutput = ChurchEntity[]

export class ListChurchesUseCase
  implements UseCase<ListChurchesInput, ListChurchesOutput>
{
  constructor(private churchRepository: ChurchRepository) {}

  async execute(): Promise<ListChurchesOutput> {
    return await this.churchRepository.findAll()
  }
}

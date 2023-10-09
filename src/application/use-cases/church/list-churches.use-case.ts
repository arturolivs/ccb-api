import { ChurchRepository } from '@/domain/repositories/church.repository'
import { UseCase } from '../use-case.interface'
import { TChurch } from '@/domain/models/church.entity'

export type ListChurchesInput = void

export type ListChurchesOutput = TChurch[]

export class ListChurchesUseCase
  implements UseCase<ListChurchesInput, ListChurchesOutput>
{
  constructor(private churchRepository: ChurchRepository) {}

  async execute(): Promise<ListChurchesOutput> {
    return await this.churchRepository.findAll()
  }
}

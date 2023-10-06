import { ChurchRepository } from '@/domain/repositories/church.repository'
import { UseCase } from '../use-case.interface'
import { Church } from '@/domain/models/church.entity'

export type ListChurchesInput = {
  locale: string
  cd_address: string
}

export type ListChurchOutput = Church[]

export class ListChurchesUseCase
  implements UseCase<ListChurchesInput, ListChurchOutput>
{
  constructor(private churchRepository: ChurchRepository) {}

  async execute(): Promise<ListChurchOutput> {
    return await this.churchRepository.findAll()
  }
}

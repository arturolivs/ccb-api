import {
  DeleteChurchUseCase,
  DeleteChurchOutput,
} from '../delete-church.use-case'
import { createMockRepository } from '@/domain/testing/helpers/repository.mock'
import { ChurchRepository } from '@/domain/repositories/church.repository'

function isType<T>(value: any): value is T {
  return typeof value === 'object' && value !== null
}

describe('DeleteChurchUseCase unit tests', () => {
  let sut: DeleteChurchUseCase
  let repository: ChurchRepository

  beforeEach(() => {
    repository = createMockRepository()
    sut = new DeleteChurchUseCase(repository)
  })

  it.skip('Should delete a church', async () => {
    const results = await sut.execute({ id: '123' })
    expect(repository.delete).toBeCalledTimes(1)
    expect(isType<DeleteChurchOutput>(results)).toBe(true)
  })
})

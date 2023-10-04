import { ChurchRepository } from '@/domain/repositories/church.repository'
import { CreateChurchUseCase } from '../create-church.usecase'
import { createMockRepository } from '@/domain/testing/helpers/repository.mock'
import { ChurchDataBuilder } from '@/domain/testing/helpers/church-data-builder'

describe('Create church use case unit tests', () => {
  let sut: CreateChurchUseCase
  let repository: ChurchRepository

  beforeEach(() => {
    repository = createMockRepository()
    sut = new CreateChurchUseCase(repository)
  })

  it('Should create a church', async () => {
    const spyInsert = jest.spyOn(repository, 'create')

    const { cd_address, locale } = ChurchDataBuilder({})
    const result = await sut.execute({
      cd_address,
      locale,
    })

    expect(result.id).toBeDefined()
    expect(result.createdAt).toBeInstanceOf(Date)
    expect(spyInsert).toHaveBeenCalledTimes(1)
  })

  // it('Should not be able to register with same email twice', async () => {
  //   const props = UserDataBuilder({ email: 'a@a.com' })
  //   await sut.execute(props)

  //   await expect(() => sut.execute(props)).rejects.toBeInstanceOf(ConflictError)
  // })

  // it('Should throws error when name not provided', async () => {
  //   const props = Object.assign(UserDataBuilder({}), { name: null })
  //   await expect(() => sut.execute(props)).rejects.toBeInstanceOf(
  //     BadRequestError,
  //   )
  // })

  // it('Should throws error when email not provided', async () => {
  //   const props = Object.assign(UserDataBuilder({}), { email: null })
  //   await expect(() => sut.execute(props)).rejects.toBeInstanceOf(
  //     BadRequestError,
  //   )
  // })
})

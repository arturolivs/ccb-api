import { validate as uuidValidate } from 'uuid'
import { Entity } from '../../entity'
import { faker } from '@faker-js/faker'

type StubProps = {
  prop1: string
  prop2: number
}

class StubEntity extends Entity<StubProps> {}

const generateProps = () => ({
  prop1: faker.lorem.word(),
  prop2: faker.number.int(),
})

describe('Entity unit tests', () => {
  it('should set attributes and props in the constructor', () => {
    const props = generateProps()
    const entity = new StubEntity(props)

    expect(entity.props).toStrictEqual(props)
    expect(entity.createdAt).toBeInstanceOf(Date)
    expect(entity.id).not.toBeNull()
    expect(uuidValidate(entity.id)).toBeTruthy()
  })

  it('should accept a valid uuid', () => {
    const props = generateProps()
    const id = faker.string.uuid()
    const entity = new StubEntity(props, id)

    expect(uuidValidate(entity.id)).toBeTruthy()
    expect(entity.id).toBe(id)
  })

  it('should convert a entity to a Javascript Object', () => {
    const props = generateProps()
    const id = faker.string.uuid()
    const entity = new StubEntity(props, id)

    expect(entity.formatted()).toStrictEqual({
      id,
      createdAt: entity.createdAt?.toISOString(),
      ...props,
    })
  })
})

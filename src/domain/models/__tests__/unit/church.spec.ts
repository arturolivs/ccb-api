import { ChurchEntity, ChurchProps } from '../../church.entity'
import { churchDataBuilder } from '../../../testing/helpers/church-data-builder'

describe('Church unit tests', () => {
  let props: ChurchProps
  let sut: ChurchEntity

  beforeEach(() => {
    props = churchDataBuilder({})
    sut = new ChurchEntity(props)
  })

  it('should create a church on constructor method', () => {
    expect(sut.props.cd_address).toEqual(props.cd_address)
    expect(sut.props.locale).toEqual(props.locale)
  })

  it.skip('should validate a church on constructor method', () => {
    const createInvalidChurch = () =>
      new ChurchEntity({ cd_address: '', locale: '' })
    createInvalidChurch()
    // expect(() => {
    //   createInvalidChurch()
    // }).toThrowError(EntityValidationError)
  })
})

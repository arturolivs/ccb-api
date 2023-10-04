import { Church, ChurchProps } from '../../church.entity'
import { ChurchDataBuilder } from '../../../testing/helpers/church-data-builder'

describe('Church unit tests', () => {
  let props: ChurchProps
  let sut: Church

  beforeEach(() => {
    props = ChurchDataBuilder({})
    sut = new Church(props)
  })

  it('should create a church on constructor method', () => {
    expect(sut.props.cd_address).toEqual(props.cd_address)
    expect(sut.props.locale).toEqual(props.locale)
  })

  it.skip('should validate a church on constructor method', () => {
    const createInvalidChurch = () => new Church({ cd_address: '', locale: '' })
    createInvalidChurch()
    // expect(() => {
    //   createInvalidChurch()
    // }).toThrowError(EntityValidationError)
  })
})

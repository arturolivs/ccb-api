import { ChurchEntity, ChurchProps } from '../../church.entity'
import { ChurchDataBuilder } from '../../testing/helpers/church-data-builder'

describe('ChurchEntity unit tests', () => {
  let props: ChurchProps
  let sut: ChurchEntity

  beforeEach(() => {
    props = ChurchDataBuilder({})
    sut = new ChurchEntity(props)
  })

  it('Constructor method', () => {
    expect(sut.props.cd_address).toEqual(props.cd_address)
    expect(sut.props.locale).toEqual(props.locale)
  })
})

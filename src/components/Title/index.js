import styled from 'styled-components'
import { layout, space } from 'styled-system'
import { pxToRem } from '../../theme/utils'

const Title = styled.h2`
  ${layout}
  ${space}
  font-size: ${pxToRem(80)};
  color: #007dff;
`

export default Title

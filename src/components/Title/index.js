import styled from 'styled-components'
import { spacing, layout } from 'styled-system'
import { pxToRem } from '../../theme/utils'

const Title = styled.h2`
  ${spacing}
  ${layout}
  font-size: ${pxToRem(80)};
  color: #007dff;
`

export default Title

import styled from 'styled-components'
import { spacing, layout } from 'styled-system'
import { pxToRem } from '../../theme/utils'

const Paragraph = styled.p`
  ${spacing}
  ${layout}
  font-size: ${pxToRem(40)};
  max-width: ${pxToRem(1000)};
  color: #eeedf6;
`

export default Paragraph

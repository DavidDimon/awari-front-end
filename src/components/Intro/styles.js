import styled from 'styled-components'
import { pxToRem } from '../../theme/utils'

export const WrapperInfo = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  align-items: flex-end;
  margin-bottom: ${pxToRem(16)};
`

export const WrapperText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const TextInfo = styled.label`
  font-weight: normal;
  font-size: ${pxToRem(24)};
  margin-left: ${pxToRem(16)};
  margin-top: ${pxToRem(8)};
`

export const WrapperImage = styled.div`
  position: absolute;
  right: -${pxToRem(300)};
  top: -${pxToRem(100)};
  border: 70px solid #1d1c25;
  border-radius: 50%;
`

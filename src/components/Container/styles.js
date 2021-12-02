import styled from 'styled-components'
import { flexbox } from 'styled-system'
import { pxToRem } from '../../theme/utils'

export const Wrapper = styled.div`
  ${flexbox}
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const WrapperDetailTop = styled.div`
  margin-left: ${pxToRem(15)};
  margin-bottom: ${pxToRem(20)};
`

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0 ${pxToRem(80)};
`

export const WrapperDetailBottom = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: ${pxToRem(15)};
`

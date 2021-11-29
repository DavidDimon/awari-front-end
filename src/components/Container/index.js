import React from 'react'

import Image from '../Image'
import {
  Wrapper,
  Content,
  WrapperDetailTop,
  WrapperDetailBottom,
} from './styles'

import { pxToRem } from '../../theme/utils'

const Container = ({ children }) => {
  return (
    <Wrapper>
      <WrapperDetailTop>
        <Image src="detail" width={pxToRem(120)} height={pxToRem(120)} />
      </WrapperDetailTop>

      <Content>{children}</Content>

      <WrapperDetailBottom>
        <Image src="detail" width={pxToRem(120)} height={pxToRem(120)} />
      </WrapperDetailBottom>
    </Wrapper>
  )
}

export default Container

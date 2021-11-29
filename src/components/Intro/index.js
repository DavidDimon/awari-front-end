import React from 'react'

import Container from '../Container'
import Image from '../Image'
import Title from '../Title'

import { WrapperText, WrapperInfo, TextInfo, WrapperImage } from './styles'
import { pxToRem } from '../../theme/utils'

const Intro = ({ title, image }) => {
  return (
    <>
      <WrapperImage>
        <Image
          src={image || 'introImage'}
          width={pxToRem(650)}
          height={pxToRem(650)}
          round
        />
      </WrapperImage>
      <Container>
        <Image src="awari" width={pxToRem(100)} height={pxToRem(27)} />
        <Title width={pxToRem(700)}>{title}</Title>

        <WrapperInfo>
          <Image src="me" width={pxToRem(100)} height={pxToRem(100)} />

          <WrapperText>
            <TextInfo>David Dimon</TextInfo>
            <TextInfo>2021</TextInfo>
          </WrapperText>
        </WrapperInfo>
      </Container>
    </>
  )
}

export default Intro

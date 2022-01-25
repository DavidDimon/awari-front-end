import React from 'react'

import Container from '../Container'
import Title from '../Title'
import Paragraph from '../Paragraph'
import Image from '../Image'
import { Center } from './styles'

import { pxToRem } from '../../theme/utils'

const Slide = ({ children, image, imageOptions, title = '', marginTitle }) => (
  <Container>
    <Title mb={marginTitle}>{title}</Title>
    {!!image && (
      <Center>
        <Image
          src={image}
          width={pxToRem(imageOptions?.width || 100)}
          height={pxToRem(imageOptions?.height || 100)}
        />
      </Center>
    )}
    {children && typeof children === 'string' ? (
      <Paragraph>{children}</Paragraph>
    ) : (
      children
    )}
  </Container>
)

export default Slide

import React from 'react'

import Container from '../Container'
import Title from '../Title'
import Paragraph from '../Paragraph'

const Slide = ({ children, title = '' }) => (
  <Container>
    <Title>{title}</Title>
    {typeof children === 'string' ? (
      <Paragraph>{children}</Paragraph>
    ) : (
      children
    )}
  </Container>
)

export default Slide

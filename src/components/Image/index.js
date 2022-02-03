import React from 'react'
import styled from 'styled-components'
import { layout, space, flexbox } from 'styled-system'

import * as images from '../../assets/images'

const Wrapper = styled.div`
  ${layout}
  ${space}
  ${flexbox}
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  ${({ round }) => (round ? 'border-radius: 50%;' : '')}
`

export default ({ src, round, ...props }) => {
  const selectedImage = React.useMemo(() => {
    if (!src) return null

    return images[src]
  }, [src])

  return (
    <Wrapper {...props}>
      {selectedImage ? (
        <Image round={round} src={selectedImage} />
      ) : (
        'Imagem não encontrada!'
      )}
    </Wrapper>
  )
}

const Component = () => {
  const [count, setCount] = React.useState(0)
  return (
    <button onClick={() => setCount((prevCount) => prevCount + 1)}>
      {count}
    </button>
  )
}

import React, { useState } from 'react'
import styled from 'styled-components'
import Like from '~/controls/Like'

export const Container = styled.div`
  text-align: center;
`

export default function Welcome() {
  const [count, setCount] = useState(0)

  return (
    <Container>
      <h1>Thanks for using tacer.</h1>
      <p>
        Click <Like count={count} onClick={setCount} /> if you like this tool.
      </p>
    </Container>
  )
}

import React from 'react'
import styled from 'styled-components'

interface Props{
  title?: string,
  children?: any
}

const Header = (props: Props)=>{

  const Container = styled.div({
    backgroundColor: '#00B7FF',
    width: '100vw',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  })
  
  return (
    <>
      <Container>
        <h2>
          {(!props.title)? 'Home': props.title}
        </h2>
      </Container>
      {
        props.children
      }
    </>
  )
}

export default Header
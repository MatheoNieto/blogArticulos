import React from 'react'
import styled from 'styled-components'

const Header: React.FC = (props: any)=>{

  const Container = styled.div({
    backgroundColor: '#00B7FF',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  })
  
  return (
    <>
      <Container>
        <h2>Login</h2>
      </Container>
      {
        props.children
      }
    </>
  )
}

export default Header
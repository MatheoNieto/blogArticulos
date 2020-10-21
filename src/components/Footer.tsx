import React from 'react'
import styled from 'styled-components'


const Footer: React.FC  = (props: any)=>{
  const Container = styled.div({
    backgroundColor: '#00B7FF',
    width: '100%',
    height: '5%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  })
  
  return (
    <>
      <Container>
        <h3>footer df</h3>
      </Container>
    </>
  )
}

export default Footer
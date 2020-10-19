import React, {Component} from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background: red;
  width: 100%;
  padding: 20px
`

class Login extends Component {

  constructor(props: any){
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <>
        <Container>
          login
        </Container>
      </>
    )
  }
}


export default  Login 
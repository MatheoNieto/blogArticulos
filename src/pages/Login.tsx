import React, {Component} from 'react'
import styled from 'styled-components'

import { Mutation } from '@apollo/react-components';
import { connect } from 'react-redux';


const Container = styled.div({
  backgroundColor: '#fff',
  padding: 10,
  width: '100vw',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
})

const ContainerLogin = styled.div({
  backgroundColor: '#E8E8E8',
  width: '25%',
  padding: 20,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 5,
})

const ContentForm = styled.div({
  padding: 5,
  width: '100%',
  display: 'flex',
  flexDirection: 'column'
})



class Login extends Component {

  constructor(props: any){
    super(props)

    this.state = {

    }
  }

  handleSubmitForm= ()=>{

  }
  
  render() {
    return (
      <>
        <Container>
          <ContainerLogin className='box-shadow'>
            <h3>INGRESAR</h3>
            <ContentForm>
              <label htmlFor="">Usuario</label>
              <input 
                type="text" 
                onChange={()=>null}
              />

              <label htmlFor="">Contraseña</label>
              <input 
                type="text" 
                name=""
                id=""
              />

              <button
                className='btn btn-success'
                onClick={this.handleSubmitForm()}
              >
                Iniciar sesión
              </button>
            </ContentForm>
          </ContainerLogin>
        </Container>
      </>
    )
  }
}


export default  Login 
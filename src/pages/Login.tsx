import React, {Component} from 'react'
import styled from 'styled-components'

import { connect } from 'react-redux';
import { login } from '../store/actions/loginActions';

import MessageError from '../components/MessageError'
import { Link } from 'react-router-dom';


const Container = styled.div({
  backgroundColor: '#fff',
  padding: 10,
  width: '100vw',
  height: '50vh',
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
interface State{
  usuario: string,
  password: string,
  visibleError?: boolean,
  messageError?: string
}
interface Props{
  login: any
}

class Login extends Component <Props,State> {

  constructor(props: any){
    super(props)

    this.state = {
      usuario: '',
      password: '',
      visibleError: false,
      messageError: ''
    }
  }

  componentDidUpdate(prevProps: Props, prevState: State){

  }

  handleChangeUsername= (event: any)=>{
    this.setState({usuario: event.target.value})
  }

  handleChangePassword= (event: any)=>{
    this.setState({password: event.target.value})
  }
  
  handleSubmitForm = (event: any) => {
    event.preventDefault()

    if(!this.state.usuario || !this.state.password){
      this.setState({
        visibleError: true,
        messageError: 'El usuario y contraseña son requeridos'
      })
      return
    }

    this.setState({
      visibleError: false,
      messageError: ''
    })
    
    const datosLogin = {
      usuario: this.state.usuario,
      password: this.state.password
    }
    
    this.props.login(datosLogin)
  }

  render() {
    return (
      <>
        <Container>
          <ContainerLogin className='box-shadow'>
            <h3>INGRESAR</h3>
            <ContentForm>

              <MessageError visible={this.state.visibleError} message={this.state.messageError}/>

              <label htmlFor="">Usuario</label>
              <input 
                type="text" 
                onChange={this.handleChangeUsername}
              />

              <label htmlFor="">Contraseña</label>
              <input 
                type="password" 
                onChange={this.handleChangePassword}
              />

              <button
                className='btn btn-success'
                onClick={this.handleSubmitForm}
              >
                Iniciar sesión
              </button>
              <Link to='/register' > Registrar un usuario </Link>
              
            </ContentForm>
          </ContainerLogin>
        </Container>
      </>
    )
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  login: (payload: any) => dispatch(login(payload)),
})

export default connect(null, mapDispatchToProps)(Login) 
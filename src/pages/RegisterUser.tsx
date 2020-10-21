import React, {useState} from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

import MessageError from '../components/MessageError'

import { connect } from 'react-redux';
import { crearUser } from '../store/actions/userActions';

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

const ContainerRegister = styled.div({
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

const RegisterUser = (props: any) =>{
  const [nombres, setNombres] = useState('')
  const [usuario, setUsuario] = useState('')
  const [password, setPassword] = useState('')
  const [visibleError, setVisibleError] = useState(false)
  const [messageError, setMessageError] = useState('')

  

  const handleChangeNombres = (event: any)=>{
    setNombres(event.target.value)
  }
  const handleChangeUsername = (event: any)=>{
    setUsuario(event.target.value)
  }

  const handleChangePassword = (event: any)=>{
    setPassword(event.target.value)
  }
  
  const handleSubmitForm = (event: any)=>{
    event.preventDefault();

    if (!nombres || !usuario || !password){
      setVisibleError(true)
      setMessageError('Los datos son requeridos')
      return
    }

    setVisibleError(false)
    setMessageError('')
    
    const datosUser = {
      nombres,
      usuario,
      password
    }
    props.crearUser(datosUser)
  }
  
  return (
    <>
      <Container>
        <ContainerRegister className='box-shadow'>
          <h3>REGISTRARSE</h3>
          <ContentForm>

            <MessageError visible={visibleError} message={messageError}/>
            
            <label htmlFor="">Nombres</label>
            <input 
              type="text" 
              onChange={handleChangeNombres}
            />

            <label htmlFor="">Usuario</label>
            <input 
              type="text" 
              onChange={handleChangeUsername}
            />

            <label htmlFor="">Contraseña</label>
            <input 
              type="password" 
              onChange={handleChangePassword}
            />

            <button
            className='btn btn-success'
            onClick={handleSubmitForm}
            >
             Registrarse
            </button>
            <Link to='/' > Iniciar sesión </Link>

          </ContentForm>
        </ContainerRegister>
      </Container>
    </>
  )
}

const mapDispatchToProps = (dispatch: any) => ({
  crearUser: (payload: any) => dispatch(crearUser(payload)),
})

export default connect(null, mapDispatchToProps)(RegisterUser)
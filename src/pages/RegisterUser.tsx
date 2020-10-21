import React, {useState} from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';


const RegisterUser = (props: any) =>{
  const [nombres, setNombres] = useState('')
  const [usuario, setUsuario] = useState('')
  const [password, setPassword] = useState('')

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

  const handleChangeNombres = (event: any)=>{

  }
  const handleChangeUsername = (event: any)=>{

  }

  const handleChangePassword = (event: any)=>{

  }
  
  const handleSubmitForm = (event: any)=>{

  }
  
  return (
    <>
      <Container>
        <ContainerRegister className='box-shadow'>
          <h3>REGISTRARSE</h3>
          <ContentForm>

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

export default RegisterUser
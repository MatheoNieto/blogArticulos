import React, {Component} from 'react'
import { Link } from 'react-router-dom';

import Header from '../components/Header'
import Footer from '../components/Footer'

class CrearArticulo extends Component{

  constructor(props: any){
    super(props)

    this.state = {}
  }

  render(){
    return (
      <>
        <Header title='Crear articulo'>
          <div className='container'>
            <div className='content-form'>

              <label htmlFor="">Url image</label>
              <input type="text" name="" id="" className='input' />
              
              <label htmlFor="">Titulo</label>
              <input type="text" name="" id="" className='input' />

              <label htmlFor="">Detalles</label>
              <input type="text" name="" id="" className='input' />

              <label htmlFor="">Descripción</label>
              <textarea className='textarea'>
              </textarea>

              <div className='space-between'>
                <Link to='/home'>
                  <button className='btn btn-danger'>Cancelar</button>
                </Link>
                
                <button className='btn btn-success'>Guardar</button>
              </div>

            </div>
          </div>

          <Footer />
        </Header>
      </>
    )
  }
}

export default CrearArticulo
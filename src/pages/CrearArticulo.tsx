import React, {Component} from 'react'
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';


import Header from '../components/Header'
import Footer from '../components/Footer'


interface Props {
  match: any,
  articulos: []
}

interface State {
  urlImagen: string,
  titulo: string,
  detalles: string,
  descripcion: string,
}
class CrearArticulo extends Component <Props, State>{

  constructor(props: any){
    super(props)

    this.state = {
      urlImagen: '',
      titulo: '',
      detalles: '',
      descripcion: '',
    }
  }

  componentDidMount() {

    const {
      match: { params: { id } },
      articulos
    } = this.props;

      if (id) {
        const articulo: any = articulos[id];
        this.setState({
          urlImagen: articulo.imagen,
          titulo: articulo.titulo,
          detalles: articulo.detalles,
          descripcion: articulo.descripcion
        })
      }
    }

  render(){
    return (
      <>
        <Header title='Crear articulo'>
          <div className='container'>
            <div className='content-form'>

              <label htmlFor="">Url image</label>
              <input type="text" className='input' value={this.state.urlImagen} />
              
              <label htmlFor="">Titulo</label>
              <input type="text" className='input' value={this.state.titulo} />

              <label htmlFor="">Detalles</label>
              <input type="text" className='input' value={this.state.detalles} />

              <label htmlFor="">Descripción</label>
              <textarea className='textarea' value={this.state.descripcion} >
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

const mapStateToProps = (reducers: any) => {
  return reducers.articulosReducer;
};

export default connect(mapStateToProps)(CrearArticulo)
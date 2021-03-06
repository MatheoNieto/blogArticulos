import React, {Component} from 'react'
import { Link, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import {updateArticulo, createArticulo} from '../store/actions/articulosActions'

import Header from '../components/Header'
import Footer from '../components/Footer'


interface Props {
  match: any,
  articulos: [],
  updateArticulo: any,
  createArticulo: any
}

interface State {
  urlImagen: string,
  titulo: string,
  detalles: string,
  descripcion: string,
  idArticulo?: string,
  redirect: boolean
}
class CrearArticulo extends Component <Props, State>{

  constructor(props: any){
    super(props)

    this.state = {
      urlImagen: '',
      titulo: '',
      detalles: '',
      descripcion: '',
      redirect: false
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
        descripcion: articulo.descripcion,
        idArticulo: articulo.id
      })
    }
  }

  handleChangeUrlImagen= (event: any)=>{
    this.setState({urlImagen: event.target.value})
  }
  handleChangeTitulo= (event: any)=>{
    this.setState({titulo: event.target.value})
  }
  handleChangeDetalles= (event: any)=>{
    this.setState({detalles: event.target.value})
  }
  handleChangeDescripcion= (event: any)=>{
    this.setState({descripcion: event.target.value})
  }
  handleChangeSubmitForm= (event: any)=>{

    event.preventDefault();

    const {
      match: { params: { id } },
      updateArticulo,
      createArticulo
    } = this.props;

    const datosArticulo: any = {
      imagen: this.state.urlImagen,
      titulo: this.state.titulo,
      detalles: this.state.detalles,
      descripcion: this.state.descripcion
    }

    this.setState({
      redirect: true
    })
    
    if(id){
      datosArticulo['id'] = this.state.idArticulo
      updateArticulo(datosArticulo)
      return
    }

    createArticulo(datosArticulo)
  }

  render(){
    return (
      <>
        {
          (this.state.redirect) ? <Redirect to='/home' /> : null
        }
        <Header title='Crear articulo'>
          <div className='container'>
            <div className='content-form'>

              <label htmlFor="">Url image</label>
              <input type="text" className='input' value={this.state.urlImagen} onChange={this.handleChangeUrlImagen}/>
              
              <label htmlFor="">Titulo</label>
              <input type="text" className='input' value={this.state.titulo} onChange={this.handleChangeTitulo}/>

              <label htmlFor="">Detalles</label>
              <input type="text" className='input' value={this.state.detalles} onChange={this.handleChangeDetalles}/>

              <label htmlFor="">Descripción</label>
              <textarea className='textarea' value={this.state.descripcion} onChange={this.handleChangeDescripcion}>
              </textarea>

              <div className='space-between'>
                <Link to='/home'>
                  <button className='btn btn-danger'>Cancelar</button>
                </Link>
                
                <button className='btn btn-success' onClick={this.handleChangeSubmitForm}>Guardar</button>
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

const mapDispatchToProps = (dispatch: any) => ({
  updateArticulo: (payload: any) => dispatch(updateArticulo(payload)),
  createArticulo: (payload: any) => dispatch(createArticulo(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CrearArticulo)
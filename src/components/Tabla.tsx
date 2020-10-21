import React from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {deleteArticulo} from '../store/actions/articulosActions'


const Tabla = (props: any)=>{

  const ponerFilas = () => {
    if(!props.articulos){
      return(
        <>
          <tr><td colspan="5"><h3>No tienes articulos registrados</h3></td></tr>
        </>
      )
    }

    return props.articulos.map((articulo: any, key: any) => (
      <>
        <tr key={key}>
          <td>{articulo.titulo}</td>
          <td>{articulo.detalles}</td>
          <td>{articulo.descripcion}</td>
          <td>{articulo.createdAt}</td>
          <td>
            <Link to={`/createArticulos/${key}`}>
              <button
                className='btn-sm btn-warning'
              >
                Editar
              </button>
            </Link>
            
            <button
              className='btn-sm btn-danger'
              onClick= {()=> deleteArticulo(articulo.id)}
            >
              Eliminar
            </button>
          </td>
        </tr>
      </>
    ))
  }
  
  return (
    <>
      <table>
        <thead>
          <th>Titulo</th>
          <th>Detalles</th>
          <th>Descripción</th>
          <th>Fecha de creación</th>
          <th>Acciones</th>
        </thead>
        <tbody>
            {ponerFilas()}
        </tbody>
      </table>
    </>
  )
}

const mapStateToProps = (reducers: any) => {
  return reducers.articulosReducer;
};

const mapDispatchToProps = (dispatch: any) => ({
  deleteArticulo: (payload: any) => dispatch(deleteArticulo(payload)),
})

export  default connect(mapStateToProps, mapDispatchToProps)(Tabla)
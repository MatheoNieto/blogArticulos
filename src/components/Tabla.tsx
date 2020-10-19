import React from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Tabla: React.FC = (props: any)=>{

  const ponerFilas = () => props.articulos.map((articulo: any, key: any) => (
    <>
      <tr key={key}>

      </tr>
    </>
  ))
  
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
          <tr>
            <td>asfasdfasdf</td>
            <td>12341234</td>
            <td>asdfas dfasdf asdf</td>
            <td>2020-06-12</td>
            <td>

              <Link to={`/createArticulos/1`}>
                <button
                  className='btn-sm btn-warning'
                >
                  Editar
                </button>
              </Link>
              
              <button
                className='btn-sm btn-danger'
              >
                Eliminar
              </button>

            </td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export  default  Tabla
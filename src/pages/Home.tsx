import React, {Component} from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'

import { connect } from 'react-redux';
import {getArticulos} from '../store/actions/articulosActions'

// COMPONENTS
import Loading from '../components/Loading';
import Error from '../components/Error';
import Tabla from '../components/Tabla';

import styled from 'styled-components'
import { Link } from 'react-router-dom';


interface Props {
  error: string,
  cargando: boolean;
  getArticulos: any
}

interface State {

}

const Container = styled.div({
  padding: 10,
  width: '100vw',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
})

const ContentTable = styled.div({
  backgroundColor: '#fff',
  padding: 20,
  width: '60%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  overflowY: 'auto',
  height: '90%'
})

class Home extends Component <Props, State> {

  constructor(props: any){
    super(props)

    this.state = {}
  }

  async  componentDidMount() {
    await this.props.getArticulos()
  }
  
  ponerContenido = () => {
    if (this.props.cargando) {
      return <Loading />;
    }
    if (this.props.error) {
      return <Error mensaje={this.props.error} />;
    }
    return <Tabla />;

  };
  
  render() {
    return (
      <>
        <Header>
          <div className='container'>
              <Container>

                <div className='flex-start width-60'>
                  <Link to='/createArticulos'>
                    <button
                      className='btn btn-success'
                    >
                        Crear articulo
                    </button>
                  </Link>
                  
                </div>
                <ContentTable className='box-shadow-sm overflow-x'>
                  { this.ponerContenido() }
                </ContentTable>
              </Container>


          </div>
          <Footer />
        </Header>
      </>
    )
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  getArticulos: (payload: any) => dispatch(getArticulos()),
})

const mapStateToProps = (reducers: any) => {
  return reducers.articulosReducer;
};

export default  connect(mapStateToProps, mapDispatchToProps)(Home)
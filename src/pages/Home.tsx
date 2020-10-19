import React, {Component} from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'

// COMPONENTS
import Loading from '../components/Loading';
import Error from '../components/Error';
import Tabla from '../components/Tabla';

import styled from 'styled-components'


interface Props {
  error: string,
  cargando: boolean;
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
  padding: 10,
  width: '60%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
})

class Home extends Component <Props, State> {

  constructor(props: any){
    super(props)

    this.state = {}
  }

  async  componentDidMount() {

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
        <div className='container'>
          <Header>

            <Container>

              <div className='flex-start width-60'>
                <button
                  className='btn btn-danger'
                >
                  Crear articulo
                </button>
              </div>
              <ContentTable>
                { this.ponerContenido() }
              </ContentTable>
            </Container>

            <Footer />

          </Header>
        </div>
      </>
    )
  }
}

export default  Home
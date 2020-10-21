import React from 'react';
import Lottie from 'react-lottie';
import styled from 'styled-components'

import animationLoading from '../assets/lotties/error.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationLoading,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const Container = styled.div({
  backgroundColor: '#fff',
  padding: 10,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
})

interface Props {
  mensaje: string
}

const Error: React.FC <Props> = (props: any) => {
    return (
      <>
        <Container>
          <Lottie
            options={defaultOptions}
            height={100}
            width={100}
          />
          <h3 style={{ textAlign: 'center' }}>{props.mensaje}</h3>
        </Container>
      </>
    );
}


export default Error;
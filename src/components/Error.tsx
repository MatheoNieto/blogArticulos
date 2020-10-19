import React from 'react';
import Lottie from 'react-lottie';

import animationLoading from '../assets/lotties/error.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationLoading,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

interface Props {
  mensaje: string
}

const Error: React.FC <Props> = (props: any) => {
    return (
      <>
        <Lottie
          options={defaultOptions}
          height={400}
          width={400}
        />
        <h2 style={{ textAlign: 'center' }}>{props.mensaje}</h2>
      </>
    );
}


export default Error;
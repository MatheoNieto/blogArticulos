import React from 'react'
import styled  from 'styled-components'
import { FontAwesome } from 'react-web-vector-icons';

const Container = styled.div({
  padding: '5px',
  width: '95%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
  backgroundColor: '#FFC8C8',
  border: '1px solid  #C60B0B',
  flexWrap: 'wrap',
  borderRadius: 5,
  marginVertical: 5
})

const Text = styled.h5({
  color: '#8B1111',
  fontWeight: "bold",
  margin: 3
})

interface Props {
  visible?: boolean,
  message?: string
}

const MessageError = (props: Props)=>{

  return (
    <>
      {
        (props.visible)?
          (
            <>
              <Container>
                <FontAwesome
                  name='times-circle-o'
                  size={25}
                />
                <Text>{props.message}</Text>
              </Container>
            </>
          ): null 
      }
    </>
  )
}

export default MessageError
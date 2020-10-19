import React, {Component} from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'

class Home extends Component{

  constructor(props: any){
    super(props)

    this.state = {}
  }
  
  render() {
    return (
      <>
        <div className='container'>
          <Header>
            <div>
              jkasdfjkasdjf
            </div>
            <Footer />
          </Header>
        </div>
      </>
    )
  }
}

export default  Home
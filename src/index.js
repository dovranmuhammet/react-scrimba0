import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'

import Header from './Header'
import MainComponent from './MainComponent'
import Footer from './Footer'

const App = () => {
  return (
    <div>
      <Header />
      <MainComponent />
      <Footer />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

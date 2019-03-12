import React from 'react'
import ReactDOM from 'react-dom'

import './static/css/open-iconic-bootstrap.min.css'
import './static/css/animate.css' 
import  './static/css/owl.theme.default.min.css'
import  './static/css/magnific-popup.css'
import  './static/css/aos.css'
import  './static/css/ionicons.min.css'
import  './static/css/flaticon.css'
import  './static/css/icomoon.css'
import  './static/css/style.css'

// Your top level component
import App from './App'

// Export your top level component as JSX (for static rendering)
export default App

// Render your app
if (typeof document !== 'undefined') {
  const renderMethod = module.hot
    ? ReactDOM.render
    : ReactDOM.hydrate || ReactDOM.render

  const render = Comp => {
    renderMethod(<Comp />, document.getElementById('root'))
  }

  // Render!
  render(App)

  // Hot Module Replacement
  if (module.hot) {
    module.hot.accept('./App', () => render(require('./App').default))
  }
}

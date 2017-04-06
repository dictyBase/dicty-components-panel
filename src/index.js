import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import PanelGroup from './Components/PanelGroup'
import Panel from './Components/Panel'
import PanelHeader from './Components/PanelHeader'
import PanelTitle from './Components/PanelTitle'
import PanelBody from './Components/PanelBody'

ReactDOM.render(
  <App />,
  document.getElementById('root')
)


module.exports = {
    PanelGroup,
    Panel,
    PanelHeader,
    PanelTitle,
    PanelBody
}

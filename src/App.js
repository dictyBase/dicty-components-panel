import React, { Component } from 'react';
import Panel from './Components/Panel'
import PanelHeader from './Components/PanelHeader'
import PanelBody from './Components/PanelBody'
import PanelTitle from './Components/PanelTitle'

// const panelStyle = { border: '1px solid #D2D7D3' }
// const headerStyle = {
//     backgroundColor: '#337ab7',
//     padding: '20px',
//     borderColor: '#4B77BE'
// }
// const titleStyle = {
//     color: '#ffffff',
//     fontWeight: '200',
//     fontSize: '20px'
// }


class App extends Component {
  render() {
    return (
      <div className="App">
        <Panel collapse={ true }>
            <PanelHeader >
               <PanelTitle >{ "kek2kek" }</PanelTitle>
            </PanelHeader>
            <PanelBody>
              <div style={ { background: '#333', height: 100, width: 100 } }></div>
            </PanelBody>
        </Panel>
      </div>
    )
  }
}

export default App;

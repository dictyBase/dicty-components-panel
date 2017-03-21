import React, { Component } from 'react'
import PanelGroup from './Components/PanelGroup'
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
        <PanelGroup>
         <Panel collapse>
             <PanelHeader>
                 <PanelTitle>
                     The bubble boy
                 </PanelTitle>
             </PanelHeader>
             <PanelBody>
                 It was moops!
             </PanelBody>
         </Panel>
         <Panel collapse open={false}>
             <PanelHeader>
                 <PanelTitle>
                     The heart attack
                 </PanelTitle>
             </PanelHeader>
             <PanelBody>
                 The flaming globe of sigmund
             </PanelBody>
         </Panel>
        </PanelGroup>
      </div>
    )
  }
}

export default App;

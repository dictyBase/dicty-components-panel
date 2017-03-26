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
const theme = {
    // borderColor: '#F39237',
    borderWidth: 1,
    borderRadius: 4,
    // bodyBackgroundColor: '#FBFEF9',
    bodyTextColor: '#3E6990',
    headerBackgroundColor: '#0E79B2',
    headerTextColor: '#191923'
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <PanelGroup theme={ theme }>
         <Panel collapse>
             <PanelHeader>
                 <PanelTitle>
                     Panels are cool!
                 </PanelTitle>
             </PanelHeader>
             <PanelBody>
                 They have cool stuff inside of them.
             </PanelBody>
         </Panel>
         {/* <Panel collapse open={ false }>
             <PanelHeader>
                 <PanelTitle>
                     The heart attack
                 </PanelTitle>
             </PanelHeader>
             <PanelBody>
                 The flaming globe of sigmund
             </PanelBody>
         </Panel> */}
        </PanelGroup>
      </div>
    )
  }
}

export default App;

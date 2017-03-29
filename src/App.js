import React, { Component } from 'react'
import styled from 'styled-components'
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
    bodyTextColor: '#333',
    headerBackgroundColor: '#0E79B2',
    headerTextColor: '#fff'
}

const Container = styled.div`
  max-width: 800px;
  margin: 20px auto;
`

class App extends Component {
  render() {
    return (
      <Container className="App">
        <PanelGroup theme={ theme }>
         <Panel collapse>
             <PanelHeader>
                 <PanelTitle>
                     Panels are cool!
                 </PanelTitle>
             </PanelHeader>
             <PanelBody>
                 They have cool stuff inside of them.<br />
               How much content fits? <br />
             As much as you want!
             </PanelBody>
         </Panel>
         <Panel collapse open={ false }>
             <PanelHeader>
                 <PanelTitle>
                    Open me for a surprise!
                 </PanelTitle>
             </PanelHeader>
             <PanelBody>
                 Just kidding.
             </PanelBody>
         </Panel>
        </PanelGroup>
      </Container>
    )
  }
}

export default App;

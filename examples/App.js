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

const theme2 = {
    borderWidth: 1,
    borderRadius: 2,
    bodyBackgroundColor: '#F76F8E',
    bodyTextColor: '#1B2021',
    headerBackgroundColor: '#3A405A',
    headerTextColor: '#FBFAF8'
}

const Container = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 0 20px;
`

const ContentTitle = styled.h4`
  margin: 0px;
`

class App extends Component {
  render() {
    return (
      <Container className="App">
        {/* A basic theme */}
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
         <Panel open={ false }>
             <PanelHeader>
                 <PanelTitle>
                    Open me for a surprise!
                 </PanelTitle>
             </PanelHeader>
             <PanelBody>
                 Just kidding, this panel is static.
             </PanelBody>
         </Panel>
        </PanelGroup>
        {/* A crazier theme */}
        <PanelGroup theme={ theme2 }>
          <Panel collapse>
            <PanelHeader>
              <PanelTitle>
                Changing things up is cool too.
              </PanelTitle>
            </PanelHeader>
            <PanelBody>
              <ContentTitle>Content Title</ContentTitle><br />
              Heterogeneous content goes here.<br />
            </PanelBody>
          </Panel>
        </PanelGroup>
      </Container>
    )
  }
}

export default App;

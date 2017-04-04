# Collapsible Panel Component

A collapsible, themable panel component using React with [styled-components](https://github.com/styled-components/styled-components).

### Open
<img width="802" alt="panel open" src="https://cloud.githubusercontent.com/assets/20975270/24638739/9eea2482-18b0-11e7-989b-102de7a4dae8.png">

### Closed
<img width="802" alt="panel closed" src="https://cloud.githubusercontent.com/assets/20975270/24638737/9c3470e4-18b0-11e7-8911-f910d0976327.png">

### Groups
<img width="802" alt="screen shot 2017-04-04 at 12 11 49 am" src="https://cloud.githubusercontent.com/assets/20975270/24642238/82b9a0b0-18cb-11e7-8b3e-f16275d90ccb.png">

### Collapsible
<img width="802" alt="collapse animation" src="https://zippy.gfycat.com/CoarseOddballFlickertailsquirrel.gif">

## Component Structure
<img width="802" alt="component structure" src="https://cloud.githubusercontent.com/assets/20975270/24642171/f7c4b92c-18ca-11e7-85bb-14b3920415c2.png">
## Components
```js
const panels = (
    <PanelGroup>
      {/* Collapsible panel */}
      <Panel collapse>
        <PanelHeader>
          <PanelTitle>
            Panels are fun!
          </PanelTitle>
        </PanelHeader>
        <PanelBody>
          They can hold all kinds of stuff.<br />
          <a href="#">Like links.</a><br />
        </PanelBody>
      </Panel>
      {/* Static panel */}
      <Panel>
        <PanelHeader>
          <PanelTitle>
            This panel
          </PanelTitle>
        </PanelHeader>
        <PanelBody>
          Put any content you want here.
        </PanelBody>
      </Panel>
    </PanelGroup>
)
```

## Theming
The PanelGroup component accepts a theme prop. Themable properties are as follows:
```js
const theme = {
    borderColor: '#F39237',
    borderWidth: 1,
    borderRadius: 4,
    bodyBackgroundColor: '#FBFEF9',
    bodyTextColor: '#333',
    headerBackgroundColor: '#0E79B2',
    headerTextColor: '#fff'
}

const panels = (
    <PanelGroup theme={ theme }>
      <Panel collapse>
        <PanelHeader>
          <PanelTitle>
          </PanelTitle>
        </PanelHeader>
        <PanelBody>
        </PanelBody>
      </Panel>
    </PanelGroup>
)
```

# Collapsible Panel Component

A collapsible, themable panel component using React with [styled-components](https://github.com/styled-components/styled-components).

### Open
<img width="802" alt="panel open" src="https://cloud.githubusercontent.com/assets/20975270/24638739/9eea2482-18b0-11e7-989b-102de7a4dae8.png">

### Closed
<img width="802" alt="panel closed" src="https://cloud.githubusercontent.com/assets/20975270/24638737/9c3470e4-18b0-11e7-8911-f910d0976327.png">

### Groups
<img width="802" alt="screen shot 2017-04-04 at 12 11 49 am" src="https://cloud.githubusercontent.com/assets/20975270/24642238/82b9a0b0-18cb-11e7-8b3e-f16275d90ccb.png">

### Collapsible
<img width="802" alt="collapse animation" src="https://cloud.githubusercontent.com/assets/20975270/24644047/2faedffa-18d7-11e7-94aa-3c74e1109666.gif">

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
The PanelGroup component accepts a theme prop. All of the themable properties are specified below.

## Themable Properties

| Property              | Type    | Description                                                                              |
| --------------------- | ------- | ---------------------------------------------------------------------------------------- |
| borderColor           | string  | A valid CSS color value for the `Panel`'s border                                         |
| borderWidth           | number  | The desired border width in `px`                                                         |
| borderRadius          | number  | The desired border radius in `px`                                                        |
| bodyBackgroundColor   | string  | A valid CSS color value for the `PanelBody`'s background                                 |
| bodyTextColor         | string  | A valid css color value for the text inside the `PanelBody`                              |
| headerBackgroundColor | string  | A valid CSS color value for the `PanelHeader`'s background                               |
| headerTextColor       | string  | A valid CSS color value for any text inside the `PanelHeader` (including a `PanelTitle`) |

The following theme will yield something like this.

<img width="802" alt="panel with interesting theme" src="https://cloud.githubusercontent.com/assets/20975270/24643660/04de871e-18d5-11e7-86cc-1f7f7915788d.png">


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
        {/* ...arbitrary number of Panels */}
    </PanelGroup>
)
```

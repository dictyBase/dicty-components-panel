// @flow
import React, { Component } from 'react'
import styled, { ThemeProvider } from 'styled-components'


const GroupDiv = styled.div`
    font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
    font-size: 14px;
    line-height: 1.42857143;
    color: #333;
    margin-bottom: 20;
`
type Props = {
    style: Object,
    children: ?React$Element<any>,
    theme: Object
}

export default class PanelGroup extends Component {
    displayName = 'A top level component for group multiple panel'
    props: Props
    render() {
        const { style, children, theme } = this.props
        return (
              <ThemeProvider theme={ theme }>
                <GroupDiv style={ {...style} }>
                  { children }
                </GroupDiv>
              </ThemeProvider>
        )
    }
}

PanelGroup.DefaultProps = {
    theme: {
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 4,
        bodyBackgroundColor: '#fff',
        headerBackgroundColor: '#F5F5F',
        headerTextColor: '#333'
    }
}

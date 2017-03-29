// @flow
import React, { Component } from 'react'
import styled from 'styled-components'

const PanelDiv = styled.div`
  margin-top: 5px;
  background-color: ;
  border: 1px solid ${ props => props.theme.borderColor };
  box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
  font-size: 14px;
  line-height: 1.4285714;
  color: #333;
  border-radius: 4px;
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
`

type Props = {
    style: Object,
    collapse: boolean,
    children: ?React$Element<any>,
    theme: Object
}

export default class Panel extends Component {
    displayName = 'A top level component for containing other panel components'
    props: Props
    state: {
        click: true | false,
        open: true | false
    }
    constructor() {
        super()
        this.state = {
            click: false,
            open: true
        }
    }
    onChildClick = (): void => {
        const { open } = this.state
        this.setState({
            click: true,
            open: open ? false : true
        })
    }
    renderChildren = (): ?React$Element<any> => {
        const { collapse, children } = this.props
        const { open, click } = this.state
        if (collapse) {
            const newChildren: React$Element<any> = React.Children.map(children, (child) => {
                return React.cloneElement(
                    child,
                    {
                       open: open,
                       collapse: collapse,
                       clickFunc: this.onChildClick,
                       clicked: click
                   }
                )
            })
            return newChildren
        }
        return children
    }
    render() {
        const { style, collapse } = this.props
        return (
            <PanelDiv style={ {marginBottom: collapse && 0, ...style} }>
                { this.renderChildren() }
            </PanelDiv>
        )
    }
}

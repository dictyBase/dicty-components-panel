// @flow
import React, { Component } from 'react'
import styled from 'styled-components'

const PanelDiv = styled.div`
  margin-top: 5px;
  background-color: #fff;
  border: 1px solid #ddd;
  box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
  font-size: 14px;
  line-height: 1.42857143;
  color: #333;
  border-radius: 4px;
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
`

export default class Panel extends Component {
    displayName = 'A top level component for containing other panel components'
    constructor() {
        super()
        this.state = {
            click: false,
            open: true
        }
    }
    // type Props = {
    //     style: Object,
    //     collapse: boolean
    // }
    onChildClick = () => {
        this.setState(
            {
                click: true,
                open: this.state.open ? false : true
            })
    }
    /**
     * @return {ReactElement[]} List of react elements
     */
    renderChildren = () => {
        const { collapse, children } = this.props
        if (collapse) {
            const newChildren = React.Children.map(children, (child) => {
                return React.cloneElement(child,
                              {
                                 open: this.state.open,
                                 collapse: collapse,
                                 clickFunc: this.onChildClick,
                                 clicked: this.state.click
                             })
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

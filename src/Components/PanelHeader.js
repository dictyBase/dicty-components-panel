// @flow
import React, { Component } from 'react'
import styled from 'styled-components'

const HeaderDiv = styled.div`
  color: #333;
  background-color: #F5F5F5;
  border-color: #ddd;
  padding: 10px 15px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
  font-size: 14px;
  line-height: 1.42857143;
`

type Props = {
    style: Object,
    collapse: boolean,
    children: ?React$Element<any>,
    clickFunc: Function
}

export default class PanelHeader extends Component {
    displayName = 'A component for panel header'
    props: Props

    renderChildren = (): ?React$Element<any> => {
        const { collapse, children, clickFunc } = this.props
        if (collapse) {
            const newChildren: ?React$Element<any> = React.Children.map(children, (child) => {
                return React.cloneElement(
                    child,
                    {
                       collapse: collapse,
                       clickFunc: clickFunc
                   })
            })
            return newChildren
        }
        return children
    }
    render() {
        const { style, collapse } = this.props
        return (
            <HeaderDiv style={ {borderBottom: collapse && '0px none #ddd', ...style} }>
                { this.renderChildren() }
            </HeaderDiv>
        )
    }
}

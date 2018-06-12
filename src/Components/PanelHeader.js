// @flow
import React, { Component } from "react"
import styled from "styled-components"

const HeaderDiv = styled.div`
  color: ${props => props.theme.headerTextColor};
  background-color: ${props =>
    props.theme.headerBackgroundColor
      ? props.theme.headerBackgroundColor
      : "#15317e"};
  border-color: #ddd;
  padding: 10px 15px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 1.42857143;
  ${props => props.collapse && "cursor: pointer;"};
`

type Props = {
  style: Object,
  collapse: Boolean,
  children: ?React$Element<any>,
  clickFunc: Function,
  theme: Object,
}

export default class PanelHeader extends Component {
  props: Props

  renderChildren = (): ?React$Element<any> => {
    const { collapse, children, clickFunc } = this.props
    if (collapse) {
      const newChildren: ?React$Element<any> = React.Children.map(
        children,
        child => {
          return React.cloneElement(child, {
            collapse,
            clickFunc,
          })
        },
      )
      return newChildren
    }
    return children
  }
  render() {
    const { style, collapse, clickFunc } = this.props
    return (
      <HeaderDiv
        collapse={collapse}
        onClick={clickFunc}
        style={{ borderBottom: collapse && "0px none #ddd", ...style }}>
        {this.renderChildren()}
      </HeaderDiv>
    )
  }
}

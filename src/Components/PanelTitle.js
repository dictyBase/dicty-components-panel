// @flow
import React, { Component } from 'react'
import styled from 'styled-components'

const Title = styled.h3`
  margin-top: 0;
  margin-bottom: 0;
  font-size: 16px;
  color: inherit;
  font-family: inherit;
  font-weight: 500;
  line-height: 1.1;
  cursor: pointer;
`
const A = styled.a`
  text-decoration: none;
  background-color: transparent;

  &:visited {
    color: ${ props => props.theme.headerTextColor };
  }

  &:hover {
      text-decoration: underline;
  }
`

type Props = {
    style: Object,
    collapse: boolean,
    clickFunc: Function,
    children: ?React$Element<any>
}
export default class PanelTitle extends Component {
    displayName = 'A component for the panel title'
    props: Props

    render() {
        const { collapse, style, children, clickFunc } = this.props
        let elem: ?React$Element<any>
        if (collapse) {
            elem = (
                <A href="#" onClick={ clickFunc }>
                  { children }
                </A>
            )
        } else {
            elem = children
        }
        return (
            <Title style={ {...style} }>
                { elem }
            </Title>
        )
    }
}

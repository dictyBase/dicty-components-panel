// @flow
import React, { Component } from 'react'
import styled from 'styled-components'

const Title = styled.h3`
  margin-top: 0;
  margin-bottom: 0;
  font-size: 16px;
  color: ${ props => props.theme.headerTextColor ? props.theme.headerTextColor : 'white' };
  font-family: inherit;
  font-weight: 500;
  line-height: 1.1;
  cursor: ${ props => props.collapse && 'pointer' };
`
export const TitleCollapse = styled.div`
  ${''/* text-decoration: none; */}
  background-color: transparent;
  color: ${ props => props.theme.headerTextColor ? props.theme.headerTextColor : 'white' };
  cursor: pointer;
  ${''/* &:visited {
    color: ${ props => props.theme.headerTextColor ? props.theme.headerTextColor : 'white' };
  } */}

  ${''/* &:hover {
      text-decoration: none;
  } */}
`

type Props = {
    style: Object,
    collapse: boolean,
    clickFunc: Function,
    children: ?React$Element<any>,
    theme: Object
}
export default class PanelTitle extends Component {
    displayName = 'Panel Title'
    props: Props

    render() {
        const { collapse, style, children, clickFunc } = this.props
        let elem: ?React$Element<any>
        if (collapse) {
            elem = (
                <TitleCollapse onClick={ clickFunc }>
                  { children }
                </TitleCollapse>
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

// @flow
import React, { Component } from 'react'
import styled from 'styled-components'

const BodyDiv = styled.div`
  padding: 15px;
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
  font-size: 14px;
  line-height: 1.42857143;
  border-top: 1px solid #ddd;
  color: #333;
  transition: height 0.5s ease-in-out, visibility 0.5s ease-in-out;
`

type Props = {
    style: Object,
    collapse: boolean,
    open: boolean,
    clicked: boolean,
    children: ?React$Element<any>
}

export default class PanelBody extends React.Component {
    displayName = 'A component for the panel content'
    props: Props

    render() {
        const { collapse, open, style, children, clicked } = this.props
        return (
            <BodyDiv style={
                {
                  overflow: collapse && 'hidden',
                  display: open ? 'block': 'none',
                  transition: collapse && 'height 0.5s ease-in-out, visibility 0.5s ease-in-out',
                  ...style
                }
              }
            >
              { children }
            </BodyDiv>
        )
    }
}

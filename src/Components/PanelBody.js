// @flow
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

const BodyDiv = styled.div`
  padding: 0px 15px;
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
  font-size: 14px;
  line-height: 1.42857143;
  border-top: 1px solid ${ props => props.theme.borderColor };
  border-top-width: ${props => props.open ? '1px' : '0px' };
  color: ${ props => props.theme.bodyTextColor };
  transition: height 600ms cubic-bezier(0.23, 1, 0.32, 1), border-top-width 400ms cubic-bezier(0.23, 1, 0.32, 1);
  background-color: ${ props => props.theme.bodyBackgroundColor };
  color: ${ props => props.theme.bodyTextColor };
  /*height: ${ props => props.open ? '200px' : '0px' };*/
  height: auto;
  overflow: hidden;
  /*display: ${ props => props.open ? 'block' : 'none' }*/
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

    // Hacky functions to animate panel open/close
    getCloseHeight = () => {
        this.body.style.height = getComputedStyle(this.body).height
        this.body.offsetHeight
        this.body.style.height = '0px'
    }
    getOpenHeight = () => {
        const prevHeight = this.body.style.height
        this.body.style.height = 'auto'
        const endHeight = getComputedStyle(this.body).height
        this.body.style.height = prevHeight
        this.body.offsetHeight
        this.body.style.height = endHeight

        this.body.addEventListener('transitionend', function transitionEnd(e) {
        	if (e.propertyName === 'height') {
        		// this.body.style.transition = ''
        		this.body.style.height = 'auto'
        		this.body.removeEventListener('transitionend', transitionEnd, false)
        	}
        }, false)
    }
    componentWillReceiveProps(nextProps) {
        const { open } = this.props
        if (!nextProps.open) {
            this.getCloseHeight()
        } else if (nextProps.open) {
            this.getOpenHeight()
        }
    }
    render() {
        const { collapse, open, style, children, clicked } = this.props
        return (
            <BodyDiv onClick={ this.getHeight } className="panel-body" innerRef={ el => this.body = el } open={ open } style={
                {
                  // overflow: collapse && 'hidden',
                  // display: open ? 'block': 'none',
                  // transition: collapse && 'height 0.5s ease-in-out, visibility 0.5s ease-in-out',
                  ...style
                }
              }
            >
              <div style={ {height: 15} }></div>
              { children }
              <div style={ {height: 15} }></div>
            </BodyDiv>
        )
    }
}

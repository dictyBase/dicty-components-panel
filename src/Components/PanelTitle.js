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

  &:hover {
      text-decoration: underline;
  }
`
/**
 * panel title component
 */

/**
 * @example
 * <PanelTitle>
 *   The puffy shirt
 * </PanelTitle>
 *
 */

export default class PanelTitle extends Component {
    displayName = 'A component for the panel title'
    /**
     * @type {Object}
     * @property {Object} style An arbitary style object
     * @property {boolean} collapse Flag for the content to be collapsible, showed
     *                              only for documentation, should not be set
     *                              explicitly.
     * @property {boolean} clickFunc A callback function that will be
     *                               called on clicking the title, generally
     *                               a function from the parent.
     */
    static propTypes = {
        style: React.PropTypes.object,
        clickFunc: React.PropTypes.func,
        collapse: (props, propName) => {
            if (props[propName]) {
                if (typeof (props[propName]) !== 'boolean') {
                    return new Error('Expect a boolean value');
                }
                if (!props.clickFunc) {
                    return new Error('clickFunc props needs to be defined');
                }
            }
        }
    }
    /** @return {Object} gets the default style
     *  @property {Object} base The default style object
     */
    getStyles = () => {
        return {
            base: {
                marginTop: 0,
                marginBottom: 0,
                fontSize: '16px',
                color: 'inherit',
                fontFamily: 'inherit',
                fontWeight: '500',
                lineHeight: 1.1
            },
            href: {
                cursor: 'pointer',
                textDecoration: 'none',
                backgroundColor: 'transparent',
                // ':hover': {
                //     textDecoration: 'underline'
                // }
            }
        };
    }
    render() {
        const { collapse, style, children, clickFunc } = this.props;
        let elem;
        if (collapse) {
            elem = (
                <A href="#" onClick={ clickFunc }>{ children }</A>
            )
        } else {
            elem = children;
        }
        return (
            <h3
                style={ {...this.getStyles().base, ...style} }>
                { elem }
            </h3>
        )
    }
}

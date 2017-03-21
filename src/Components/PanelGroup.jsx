// @flow
import React, { Component } from 'react'
import styled from 'styled-components'

const GroupDiv = styled.div`
    font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
    font-size: 14px;
    line-height: 1.42857143;
    color: #333;
    margin-bottom: 20;
`
/**
 * panel group component
 */

/**
 *
 * @example
 * <PanelGroup>
 *  <Panel collapse>
 *      <PanelHeader>
 *          <PanelTitle>
 *              The bubble boy
 *          </PanelTitle>
 *      </PanelHeader>
 *      <PanelBody>
 *          It was moops!
 *      </PanelBody>
 *  </Panel>
 *  <Panel collapse open={false}>
 *      <PanelHeader>
 *          <PanelTitle>
 *              The heart attack
 *          </PanelTitle>
 *      </PanelHeader>
 *      <PanelBody>
 *          The flaming globe of sigmund
 *      </PanelBody>
 *  </Panel>
 * </PanelGroup>
 *
 */

type Props = {
    style: Object,
    children: ?React$Element<any>
}

export default class PanelGroup extends Component {
    displayName = 'A top level component for group multiple panel'
    props: Props

    render() {
        const {style, children} = this.props
        return (
            <GroupDiv
                style={ {...style} }>
                { children }
            </GroupDiv>
        )
    }
}

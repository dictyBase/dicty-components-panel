import React from 'react'
import { mount } from 'enzyme'
import Panel from '../Components/Panel'
import PanelHeader from '../Components/PanelHeader'
import PanelTitle from '../Components/PanelTitle'

describe('PanelHeader', () => {
    it('renders without crashing', () => {
        const wrapper = mount(
            <PanelHeader />
        )
    })
    it('renders its children', () => {
        const wrapper = mount(
            <Panel>
              <PanelHeader>
                <PanelTitle>
                  Test
                </PanelTitle>
              </PanelHeader>
            </Panel>
        )
        const child = (
            <PanelTitle>
              Test
            </PanelTitle>
        )
        expect(wrapper.contains(child)).toEqual(true)
    })

})

import React from 'react'
import { mount } from 'enzyme'
import PanelBody from '../Components/PanelBody'

describe('PanelBody', () => {
    it('renders without crashing', () => {
        const wrapper = mount(
            <PanelBody />
        )
    })
    it('renders its children', () => {
        const wrapper = mount(
            <PanelBody>
              <div />
            </PanelBody>
        )
        expect(wrapper.contains(<div />)).toEqual(true)
    })
})

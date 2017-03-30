import React from 'react'
import { mount } from 'enzyme'
import PanelTitle, { A } from '../Components/PanelTitle'


describe('PanelTitle', () => {
    it('renders without crashing', () => {
        const wrapper = mount(
            <PanelTitle />
        )
    })
    it.skip('renders an <h3><a></a><h3> containing its children if collapse is true', () => {
        const wrapper = mount(
            <PanelTitle collapse={ true }>
              Test
            </PanelTitle>
        )
        const expectedChild = (
            <h3>
              <a href="#">Test</a>
            </h3>
        )
        console.log(wrapper.html())
        expect(wrapper.contains(expectedChild)).toEqual(true)
    })
    it('renders its children if collapse is false', () => {
        const wrapper = mount(
            <PanelTitle>
              <div>
                Test
              </div>
            </PanelTitle>
        )
        expect(wrapper.contains(<div>Test</div>))
    })
})

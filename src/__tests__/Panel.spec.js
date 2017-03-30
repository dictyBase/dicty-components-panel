import React from 'react'
import { mount } from 'enzyme'
import Panel from '../Components/Panel'
import PanelHeader from '../Components/PanelHeader'
import PanelTitle from '../Components/PanelTitle'
import PanelBody from '../Components/PanelBody'

describe('panel', () => {
    const wrapper = mount(
        <Panel>
          <PanelHeader>
              <PanelTitle>
                  Test test
              </PanelTitle>
          </PanelHeader>
          <PanelBody>
            Test test test
          </PanelBody>
        </Panel>
    )
    it('renders without crashing', () => {
        const wrapper = mount(<Panel />)
        wrapper.unmount()
    })
    it('should render its children', () => {
        const child1 = (
          <PanelHeader>
              <PanelTitle>
                  Test test
              </PanelTitle>
          </PanelHeader>
        )
        const child2 = (
          <PanelBody>
            Test test test
          </PanelBody>
        )
        expect(wrapper.contains(child1)).toEqual(true)
        expect(wrapper.contains(child2)).toEqual(true)
    })
    it('closes and opens when clicked', () => {
        // Make panel collapsible
        wrapper.setProps({collapse: true})

        // Simulate close
        wrapper.find(PanelHeader).simulate('click')
        expect(wrapper.find(PanelBody).getDOMNode().style.height).toEqual('0px')

        // Simulate open
        wrapper.find(PanelHeader).simulate('click')
        expect(wrapper.find('.panel-body').getDOMNode().style.height).toEqual('auto')

        // Clean up
        wrapper.setProps({collapse: false})
    })
    it('toggles open state when the header is clicked', () => {
        // Make panel collapsible
        wrapper.setProps({collapse: true})

        wrapper.find(PanelHeader).simulate('click')
        expect(wrapper.state('open')).toEqual(false)

        wrapper.find(PanelHeader).simulate('click')
        expect(wrapper.state('open')).toEqual(true)

        // Clean up
        wrapper.setProps({collapse: false})
    })
    it('toggles open state when the title is clicked', () => {
        // Make panel collapsible
        wrapper.setProps({collapse: true})

        wrapper.find(PanelTitle).simulate('click')
        expect(wrapper.state('open')).toEqual(false)

        wrapper.find(PanelTitle).simulate('click')
        expect(wrapper.state('open')).toEqual(true)
    })
})

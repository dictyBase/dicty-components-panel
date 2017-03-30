import React from 'react'
import { mount } from 'enzyme'
import Panel from '../Components/Panel'
import PanelHeader from '../Components/PanelHeader'
import PanelTitle from '../Components/PanelTitle'
import PanelBody from '../Components/PanelBody'

describe('panel', () => {
    it('renders without crashing', () => {
        const wrapper = mount(<Panel />)
        wrapper.unmount()
    })
    it('should render its children', () => {
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
    it('closes and opens', () => {
        const wrapper = mount(
            <Panel collapse>
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
        wrapper.find(PanelHeader).simulate('click')
        expect(wrapper.find(PanelBody).getDOMNode().style.height).toEqual('0px')
        wrapper.find(PanelHeader).simulate('click')
        expect(wrapper.find('.panel-body').getDOMNode().style.height).toEqual('auto')
    })
})

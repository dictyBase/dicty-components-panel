import React from 'react'
import { mount } from 'enzyme'
import PanelGroup from '../Components/Panel'
import Panel from '../Components/Panel'
import PanelHeader from '../Components/PanelHeader'
import PanelTitle from '../Components/PanelTitle'
import PanelBody from '../Components/PanelBody'

describe('PanelGroup', () => {
    const wrapper = mount(
        <PanelGroup>
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
          <Panel>
            <PanelHeader>
                <PanelTitle>
                    Test2 test2
                </PanelTitle>
            </PanelHeader>
            <PanelBody>
              Test2 test2 test2
            </PanelBody>
          </Panel>
        </PanelGroup>
    )
    it('renders its children', () => {
        const child1 = (
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
        const child2 = (
            <Panel>
              <PanelHeader>
                  <PanelTitle>
                      Test2 test2
                  </PanelTitle>
              </PanelHeader>
              <PanelBody>
                Test2 test2 test2
              </PanelBody>
            </Panel>
        )
        expect(wrapper.contains(child1)).toEqual(true)
        expect(wrapper.contains(child2)).toEqual(true)
    })
})

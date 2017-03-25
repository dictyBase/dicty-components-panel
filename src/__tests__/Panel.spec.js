import React from 'react'
import { shallow } from 'enzyme'
import Panel from '../Components/Panel'
import PanelHeader from '../Components/PanelHeader'
import PanelTitle from '../Components/PanelTitle'
import PanelBody from '../Components/PanelBody'

describe('panel', () => {
    const children = (
          <PanelHeader>
              <PanelTitle>
                  Test test
              </PanelTitle>
          </PanelHeader>
    )
    const wrapper = shallow(
        <Panel>
          { children }
        </Panel>
    )

    it('renders without crashing', () => {
        shallow(<Panel />)
    })
    it('should render its children', () => {
        expect(wrapper.contains(children)).toEqual(true)
    })
})

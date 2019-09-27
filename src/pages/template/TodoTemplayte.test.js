/**
 * head, children 을 받아서 잘 뿌려주는가?
 */

import React from 'react'
import { shallow } from 'enzyme'
import MainTemplate from './index'

describe('<MainTemplate />', () => {
  it('MainTemplate 으로 감싼 children을 잘 렌더링 한다.', () => {
    const wrapper = shallow(
      <MainTemplate>
        <div className="main" />
      </MainTemplate>
    )
    expect(wrapper.contains(<div className="main" />)).toEqual(true)
  })

  it('MainTemplate 에 head 프로퍼티에 컴포넌트를 넘기면 잘 렌더링 한다.', () => {
    const wrapper = shallow(<MainTemplate header={<header>헤더</header>} />)
    expect(wrapper.contains(<header>헤더</header>)).toEqual(true)
  })
})

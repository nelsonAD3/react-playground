import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Tabs from './Accordion'
import Accordion from './Accordion';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'; 
import renderer from 'react-test-renderer';

configure({ adapter: new Adapter() });

describe(`Accordion Component`, () => { 
    const sections = [
        {
          title: 'Section 1',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        },
        {
          title: 'Section 2',
          content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
        },
        {
          title: 'Section 3',
          content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
        },
      ];

  it('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Accordion />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  it('renders empty given no tabs', () => {
    // const wrapper = shallow(<Accordion />)
    // expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders the first tab by default', () => {
    // const wrapper = shallow(<Tabs tabs={tabsProp} />)
    // expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('closes the first tab and opens any clicked tab', () => {
    // const wrapper = shallow(<Tabs tabs={tabsProp} />)
    // wrapper.find('button').at(1).simulate('click')
    // expect(toJson(wrapper)).toMatchSnapshot()
  })
})
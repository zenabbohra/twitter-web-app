import React from 'react';
import { shallow } from 'enzyme';
import Navigation from '../Navigation';
import SearchBox from "../SearchBox";

describe('<Navigation/>', () => {
  describe('renders', () => {
    const subject = shallow(<Navigation/>);

    it('has one <HomeIcon/>', () => {
      const homeIcon =  subject.find('HomeIcon');
      expect(homeIcon.length).toBe(1);
      expect(homeIcon).toMatchSnapshot();
    });

    it('has one <SearchBox/>', ()=> {
      const searchBox = subject.find('SearchBox');
      expect(searchBox.length).toBe(1);
      expect(searchBox).toMatchSnapshot();
    });

    it('has three <Link/>', () => {
      const link = subject.find('WithStyles(ForwardRef(Link))');
      expect(link.length).toBe(2);
      expect(link).toMatchSnapshot();
    });

  })
});
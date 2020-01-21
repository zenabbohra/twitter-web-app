import React from 'react';
import {shallow} from 'enzyme';
import SignIn from "../Signin";

describe('<Signin />', () => {
  describe('renders', () => {
    const subject = shallow(<SignIn/>);

    it('has two <TextField/>', () => {
      const textFields = subject.find('WithStyles(ForwardRef(TextField))');
      expect(textFields.length).toBe(2);
      expect(textFields).toMatchSnapshot();
    });

    it('has one <Button/>', () => {
      const button = subject.find('WithStyles(ForwardRef(Button))');
      expect(button.length).toBe(1);
      expect(button).toMatchSnapshot();
    });

    it('has one <Link/>', () => {
      const link = subject.find('WithStyles(ForwardRef(Link))');
      expect(link.length).toBe(1);
      expect(link).toMatchSnapshot();
    });
  });
});
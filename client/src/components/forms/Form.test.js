import React from 'react'
import Form from './Form';
import { shallow } from 'enzyme'

describe('Form', () => {
    let wrapper;

    beforeEach(() => wrapper = shallow(<Form />));

    it("should render a <form />", () => {
        expect(wrapper.find("form").length).toEqual(1);
    })
});
import React from 'react'
import PriceForm from './PriceForm';
import { shallow } from 'enzyme'

describe('PriceForm', () => {
    let wrapper;

    beforeEach(() => wrapper = shallow(<PriceForm />));

    it("should render a <form />", () => {
        expect(wrapper.find("form").length).toEqual(1);
    })
});
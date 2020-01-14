import React from 'react'
import { shallow } from 'enzyme'
import Header from './Header'

describe('Header', () => {
    let wrapper;

    beforeEach(() => wrapper = shallow(<Header />));

    it("should display a <h1>", () => {
        expect(wrapper.find("h1").length).toEqual(1);
    })
});
import React from 'react'
import VehicleList from './VehicleList';
import { shallow } from 'enzyme'

describe('VehicleList', () => {
    let wrapper;

    beforeEach(() => wrapper = shallow(<VehicleList />));

    it("should start with null", () => {
        expect(wrapper.find("div").length).toEqual(0);
    })
});
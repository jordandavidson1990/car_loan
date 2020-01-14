import React from 'react'
import VehicleItem from './VehicleItem';
import { shallow } from 'enzyme'

describe('VehicleItem', () => {
    let wrapper;

    beforeEach(() => wrapper = shallow(<VehicleItem />));

    it("should start with null", () => {
        expect(wrapper.find("div").length).toEqual(0);
    })
});
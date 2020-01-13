import React from 'react'
import MainContainer from './MainContainer'
import Form from '../components/forms/Form'
import { shallow } from 'enzyme'
import PriceForm from '../components/forms/PriceForm'

describe('MainContainer', () => {
    let wrapper;

    beforeEach(() => wrapper = shallow(<MainContainer />));

    it("should render a <div>", () => {
        expect(wrapper.find("div").length).toEqual(1);
    });

    it("should render a <section>", () => {
        expect(wrapper.find("section").length).toEqual(1)
    }
    )
    it("should render all forms", () => {
        expect(wrapper.containsAllMatchingElements([
            <Form />,
            <PriceForm />
        ])).toEqual(true);
    });

}
)
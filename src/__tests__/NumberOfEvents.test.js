import React from 'react';
import NumberOfEvents from '../NumberOfEvents';
import { shallow, mount } from 'enzyme';
import App from '../App';

describe('<NumberOfEvents /> component', () => {

    let NumberOfEventsWrapper;

    beforeAll(() => {
        NumberOfEventsWrapper = shallow(<NumberOfEvents />);
    });

    test('render input field for number of events', () => {
        expect(NumberOfEventsWrapper.find('.inputNumberOfEvents')).toHaveLength(1);
    });
    test('change number of events when input changes', () => {
        NumberOfEventsWrapper.setState({ numberOfEvents: 32 });
        expect(NumberOfEventsWrapper.state('numberOfEvents')).toEqual(32);
    });
    test('get expected list of events when number of events is updated', async () => {
        const AppWrapper = mount(<App />);
        const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents)
        await NumberOfEventsWrapper.instance().handleInputChanged({
            target: { value: 1 },
        });
        expect(AppWrapper.state('events')).toHaveLength(1);
        AppWrapper.mount();
    });

})
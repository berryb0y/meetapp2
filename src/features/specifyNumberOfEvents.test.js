import { defineFeature, loadFeature } from 'jest-cucumber';
import { mount } from 'enzyme';
import React from 'react';
import App from '../App';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, (test) => {
    let AppWrapper;

    test("When user hasn't specified a number, 2 is the default number", ({ given, when, then }) => {
        given('the user is on the main page', async () => {
            AppWrapper = await mount(<App />);
        });
        when('the user has not specified the numbers of events', () => {
            AppWrapper.update();
        });
        then('the default number of displayed events will be 2', () => {
            expect(AppWrapper.find('.event')).toHaveLength(2);
        });
    });
    test('User can change the number of events they want to see', ({ given, when, then }) => {
        given('the user is on the main page', async () => {
            AppWrapper = await mount(<App />)
        });
        when('the user changes the number of events', () => {
            AppWrapper.find('.inputNumberOfEvents').simulate('change', {
                target: { value: 1 },
              });
        });
        then('the number of events will change accordingly', () => {
            expect(AppWrapper.state('numberOfEvents')).toEqual(1);
        });
    });    
});
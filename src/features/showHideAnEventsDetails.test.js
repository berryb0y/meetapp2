import { loadFeature, defineFeature } from "jest-cucumber";
import React from "react";
import { mount, shallow } from "enzyme";

import App from "../App";
import { mockData } from "../mock-data";

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, (test) => {
    let AppWrapper;

    test('An event element is collapsed by default', ({ given, when, then }) => {
        given('the user has started the app', () => {
            AppWrapper = mount(<App />)
        });
        when('the user doesn\'t click on an event', () => {
        });
        then('the event details will be collapsed', () => {
            expect(AppWrapper.find('.event-details')).toHaveLength(0);
        });
    });
    test('User can expand an event to see its details', ({ given, when, then }) => {
        given('the user has started the app', () => {
            AppWrapper = mount(<App />)
        });
        when('the user clicks on an event', () => {
            AppWrapper.update();
            AppWrapper.find('.btn-details').at(0).simulate('click');
        });
        then('the event details will expand', () => {
            AppWrapper.update();
            expect(AppWrapper.find('.event-details').text()).toEqual(mockData[0].description);
        });
    });
//     test('User can collapse an event to hide its details', ({ given, when, then }) => {
//         given('the user has expanded the details of an event', async () => {
//             AppWrapper = await mount(<App />);
//             AppWrapper.update();
//             AppWrapper.find('btn-details').at(0).simulate('click');
//             AppWrapper.find('event-details').toHaveLength(1);
//         });
//         when('the user clicks on the event details', () => {
//             AppWrapper.find('btn-details').at(0).simulate('click');
//         });
//         then('the event details will collapse', () => {
//             expect(AppWrapper.find('.event-details')).toHaveLength(0);
//         });
//     });
// });
    test('User can collapse an event to hide its details', ({ given, when, then }) => {
        given('the user has expanded the details of an event', async () => {
            AppWrapper = await mount(<App />);
            AppWrapper.update();
            AppWrapper.find('.btn-details').at(0).simulate('click');
            expect(AppWrapper.find('.event-details')).toHaveLength(1);
        });
        when('the user clicks on the event details', () => {
            AppWrapper.find('.btn-details').at(0).simulate('click');
        });
        then('the event details will collapse', () => {
            expect(AppWrapper.find('.event-details')).toHaveLength(0);
        });
    });
});
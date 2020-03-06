import React from 'react';
import {mount} from 'enzyme';
import Root from 'Root';
import App from 'App';
import moxios from 'moxios';

beforeEach(() => {
    moxios.install();
    moxios.stubRequest('https://jsonplaceholder.typicode.com/comments', {
        status: 200,
        response: [{name: 'Fetch 1'}, {name: 'Fetch 2'}]
    })
});

afterEach(() => {
    moxios.uninstall();
});

it('can fetch comments and display them', (done) => {
    const wrapped = mount(<Root><App /></Root>);
    wrapped.find('.fetch').simulate('click');
    moxios.wait(() => {
        wrapped.update();
        expect(wrapped.find('li').length).toEqual(2);
        done();
        wrapped.unmount();
    });
});
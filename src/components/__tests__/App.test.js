import React from 'react';
import { shallow } from 'enzyme';
import Root from 'Root';
import App from 'App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

let wrapped;

beforeEach(() => {
    wrapped = shallow(<App />);
});

it('shows comment box', () => {
    expect(wrapped.find(CommentBox).length).toEqual(1);
});

it('shows comments list', () => {
    expect(wrapped.find(CommentList).length).toEqual(1);
})
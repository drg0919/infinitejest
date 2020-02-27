import {SAVE_COMMENT} from 'actions/types';
import {saveComment} from 'actions/index';

describe('save comment', () => {
    it('has the right action type', () => {
        const action = saveComment();
        expect(action.type).toEqual(SAVE_COMMENT);
    });
    it('has the right payload', () => {
        const action = saveComment('New Comment');
        expect(action.payload).toEqual('New Comment');
    });
})
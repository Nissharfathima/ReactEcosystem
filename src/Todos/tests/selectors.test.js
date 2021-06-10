import {expect} from 'chai';
import { getcompletedTodos} from '../selectors.js'

describe('the get completed Todo selectors',() => {
    it('get only the completed todos', () => {
        const fakeTodos = [
            {
                text : "Say 1",
                isCompleted : true,
            },
            {
                text : "Say 2",
                isCompleted : false,
            },
            {
                text : "Say 3",
                isCompleted : false,
            },
        ];

        const expected = [{
            text : "Say 1",
            isCompleted : true,
        }];

        const actual = getcompletedTodos.resultFunc(fakeTodos)

        expect(actual).to.deep.equal(expected);
    });
});
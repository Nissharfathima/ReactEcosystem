import { expect} from 'chai';
import {getBorderStyleForDate} from '../TodoListItem.js';

describe('test border style', () => {
    it('return none',()=>{
       const today = new Date(Date.now());
       const recentDate = new Date(Date.now() - 86400000 * 3);
       
       const expected = 'none';
       const actual = getBorderStyleForDate(recentDate,today);
       expect(actual).to.equal(expected);
    });
    it('return border',()=>{
        const today = new Date(Date.now());
        const recentDate = new Date(Date.now() - 86400000 * 7);
        
        const expected = '2px solid red';
        const actual = getBorderStyleForDate(recentDate,today);
        expect(actual).to.equal(expected);
     });
});
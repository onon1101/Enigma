// //var assert = reqire("chai").assert();
// import should from 'should';
// import encrypt from '../Javascript/src';
//
// describe("test app", function(){
//         it("check if function a() return true", function(){
//             const result = new encrypt('a');
//             console.log(result);
//             should.equal(result, 'e');
//         })
//     }
// )

import { expect } from "chai";
import  encrypt from '../Javascript/src/module/Enigma/Enigma'

describe('test app', function() {
    it('test', function() {
        const answer = ['e'];
        let result = new encrypt('a');
        expect(result).to.eql(answer);
    });
});
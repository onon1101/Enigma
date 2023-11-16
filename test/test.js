//var assert = reqire("chai").assert();
import should from 'should';
import encrypt from '../src/index.ts';

describe("test app", function(){
        it("check if function a() return true", function(){
            const result = new encrypt('a');
            console.log(result);
            should.equal(result, 'e');
        })
    }
)
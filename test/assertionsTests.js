import assert from 'assert';

describe("comparison operator",  () => {

    it("Should compare value", () => {
let x =5;
let y =6;
let actual = 5 > 6;
let expected = false;

assert.strictEqual(actual,expected, "comparison operator > failed");
        });
    console.log("should compare value succeeded")

    });

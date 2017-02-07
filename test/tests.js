var assert = chai.assert;

describe("Test for all the client JS code", function() {
    it("Should test for greet function", function() {

        assert.equal(greet("Janine"), "Hello, Janine");
    });
});

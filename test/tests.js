var assert = chai.assert;

describe("Test for all the client JS code", function() {
    it("Should test for greet function", function() {

        assert.equal(greet("English","Janine"), "Hello, Janine");
        assert.equal(greet("Xhosa","Janine"), "Molo, Janine");
        assert.equal(greet("Sotho","Janine"), "Dumela, Janine");
    });
});

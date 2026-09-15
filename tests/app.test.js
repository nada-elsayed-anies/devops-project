const { getMessage } = require("../script");

test("getMessage returns the expected message", () => {
    expect(getMessage()).toBe("Hello");
});
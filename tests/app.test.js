const { getMessage } = require("../script");

test("getMessage returns the expected message", () => {
    expect(getMessage()).toBe("Hello from my DevOps project!");
});
/* Unit Test (Using Jest) for getMessage function in script.js */
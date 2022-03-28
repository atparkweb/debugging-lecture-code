const { expect } = require("chai");
const { getStudentGreetings } = require("../greeting");

describe("getStudentGreetings", () => {
  it("should be defined", () => {
    expect(getStudentGreetings).to.exist;
  });

  it("should be a function", () => {
    expect(typeof getStudentGreetings).to.equal("function");
  });

  context("with valid students", () => {
    it("should return array of messages", () => {
      const messages = getStudentGreetings([
        {
          name: "Jean Luc",
          lang: "fr"
        },
        {
          name: "Will",
          lang: "en"
        }
      ]);

      expect(messages).to.be.instanceOf(Array);
      expect(messages[0]).to.equal("Bonjour, Jean Luc!");
      expect(messages[1]).to.equal("Hello, Will!");
    });
  });
});
const regex = /(\bi[\'\s]a?m\s)/i;

describe("Regex test", () => {
  test("it should do match", () => {
    const input = [
      "I am hungry",
      "i am hungry",
      "I'm hungry",
      "i'm hungry",
      "Time for lunch, I'm hungry",
      "Time for lunch, i'm hungry",
      "Time for lunch, I am hungry",
      "Time for lunch, i am hungry",
    ];
    input.forEach(function (testCase) {
      const res = regex.test(input);
      expect(res).toEqual(true);
    });
  });

  test("it should return the intended joke", () => {
    const testCases = [
      {
        input: "I am hungry",
        output: "Hi hungry, I'm Dadbot!",
      },
      {
        input: "i am hungry",
        output: "Hi hungry, I'm Dadbot!",
      },
      {
        input: "I'm hungry",
        output: "Hi hungry, I'm Dadbot!",
      },
      {
        input: "i'm hungry",
        output: "Hi hungry, I'm Dadbot!",
      },
      {
        input: "Time for lunch, I'm hungry",
        output: "Hi hungry, I'm Dadbot!",
      },
      {
        input: "Time for lunch, i'm hungry",
        output: "Hi hungry, I'm Dadbot!",
      },
      {
        input: "Time for lunch, I am hungry",
        output: "Hi hungry, I'm Dadbot!",
      },
      {
        input: "Time for lunch, i am hungry",
        output: "Hi hungry, I'm Dadbot!",
      },
    ];
    testCases.forEach(function (testCase) {
      const res = testCase.input.split(regex);
      const i = res.findIndex((element) => regex.test(element));
      const subject = res.slice(i + 1).join("");
      const greeting = `Hi ${subject}, I'm Dadbot!`;
      expect(greeting).toEqual(testCase.output);
    });
  });
});
